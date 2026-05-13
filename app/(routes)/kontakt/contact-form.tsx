"use client"

import { useForm as useFormSpree, ValidationError } from "@formspree/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui"

const ContactFormSchema = z.object({
  name: z.string().min(1, "Imię jest wymagane"),
  email: z.string().min(1, "Email jest wymagany").email("Podaj poprawny adres email"),
  topic: z.string().min(1, "Wybierz temat wiadomości"),
  message: z.string().min(1, "Wiadomość jest wymagana"),
  consent: z.boolean().refine((value) => value === true, "Zgoda jest wymagana"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

const topics = [
  { value: "adopcja", label: "Adopcja" },
  { value: "dom tymczasowy", label: "Dom tymczasowy" },
  { value: "wolontariat", label: "Wolontariat" },
  { value: "współpraca", label: "Współpraca" },
  { value: "wsparcie finansowe", label: "Wsparcie finansowe" },
  { value: "inne", label: "Inne" },
]

interface ContactFormProps {
  formId: string
}

export function ContactForm({ formId }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
      consent: false,
    },
  })

  const [formspreeState, handleFormSubmit] = useFormSpree<ContactFormData>(formId)
  const submitting = isSubmitting || formspreeState.submitting

  const onSubmit = async (data: ContactFormData) => {
    await handleFormSubmit({
      name: data.name,
      email: data.email,
      topic: data.topic,
      message: data.message,
      consent: data.consent,
    })
  }

  return (
    <div className="rounded-2xl border bg-white p-8">
      {formspreeState.succeeded ? (
        <div className="bg-success-100/10 border-success-100 text-success-100 mb-6 rounded-lg border p-4">
          Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
        </div>
      ) : (
        <div>
          <h2 className="mb-6 text-2xl lg:text-3xl">Wyślij wiadomość</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldContent>
                  <FieldLabel htmlFor="name">Imię *</FieldLabel>
                  <Input id="name" type="text" placeholder="Twoje imię" {...register("name")} />
                  {errors.name && <FieldError>{errors.name.message}</FieldError>}
                </FieldContent>
              </Field>

              <Field>
                <FieldContent>
                  <FieldLabel htmlFor="email">Email *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="twoj@email.pl"
                    {...register("email")}
                  />
                  {errors.email && <FieldError>{errors.email.message}</FieldError>}
                </FieldContent>
              </Field>

              <Field>
                <FieldContent>
                  <FieldLabel htmlFor="topic">Temat *</FieldLabel>
                  <Controller
                    name="topic"
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="topic" aria-invalid={!!errors.topic}>
                          <SelectValue placeholder="Wybierz temat" />
                        </SelectTrigger>
                        <SelectContent>
                          {topics.map((topic) => (
                            <SelectItem key={topic.value} value={topic.value}>
                              {topic.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.topic && <FieldError>{errors.topic.message}</FieldError>}
                </FieldContent>
              </Field>

              <Field>
                <FieldContent>
                  <FieldLabel htmlFor="message">Wiadomość *</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Opisz swoją sprawę..."
                    rows={6}
                    {...register("message")}
                  />
                  {errors.message && <FieldError>{errors.message.message}</FieldError>}
                </FieldContent>
              </Field>

              <Field>
                <div className="flex items-start gap-3">
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="consent"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <div className="flex flex-col gap-1">
                    <FieldLabel htmlFor="consent" className="cursor-pointer font-normal">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką
                      prywatności w celu kontaktu i udzielenia odpowiedzi na zapytanie. *
                    </FieldLabel>
                    {errors.consent && <FieldError>{errors.consent.message}</FieldError>}
                  </div>
                </div>
              </Field>

              <ValidationError
                errors={formspreeState.errors}
                className="text-destructive text-sm"
              />

              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
              </Button>
            </FieldGroup>
          </form>
        </div>
      )}
    </div>
  )
}

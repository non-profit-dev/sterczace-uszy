"use client"

import { useState } from "react"

import { useForm as useFormSpree, ValidationError } from "@formspree/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
} from "@/components/ui"

const DiscountCodeFormSchema = z.object({
  name: z.string().min(1, "Imię jest wymagane"),
  email: z.string().min(1, "Email jest wymagany").email("Podaj poprawny adres email"),
  consent: z.boolean().refine((value) => value === true, "Zgoda jest wymagana"),
})

type DiscountCodeFormData = z.infer<typeof DiscountCodeFormSchema>
type DiscountCodeSubmissionData = DiscountCodeFormData & {
  message: string
}

interface DiscountCodeModalProps {
  formId: string
}

export function DiscountCodeModal({ formId }: DiscountCodeModalProps) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DiscountCodeFormData>({
    mode: "onSubmit",
    resolver: zodResolver(DiscountCodeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      consent: false,
    },
  })

  const [formspreeState, handleFormSubmit, resetFormSpree] =
    useFormSpree<DiscountCodeSubmissionData>(formId)
  const submitting = isSubmitting || formspreeState.submitting

  const onSubmit = async (data: DiscountCodeFormData) => {
    await handleFormSubmit({
      name: data.name,
      email: data.email,
      consent: data.consent,
      message: "Prośba o kod zniżkowy do Safe Animal",
    })
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen && formspreeState.succeeded) {
      reset()
      resetFormSpree()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>Poproś o kod zniżkowy</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        {formspreeState.succeeded ? (
          <div className="justify-center py-6 text-center">
            <DialogHeader className="mb-4">
              <DialogTitle>Dziękujemy!</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground text-lg">
              Twoja prośba została wysłana. Niebawem otrzymasz wiadomość z kodem zniżkowym do
              rejestracji w bazie Safe Animal.
            </p>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle>Poproś o kod zniżkowy</DialogTitle>
              <DialogDescription>
                Wypełnij formularz, a kod zniżkowy 10% do rejestracji w bazie Safe Animal zostanie
                wysłany na Twój adres email.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
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
                  <div className="flex items-start gap-3">
                    <Controller
                      name="consent"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="consent"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      )}
                    />
                    <div className="flex flex-col gap-1">
                      <FieldLabel htmlFor="consent" className="cursor-pointer font-normal">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu otrzymania kodu
                        zniżkowego. *
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
                  {submitting ? "Wysyłanie..." : "Wyślij prośbę"}
                </Button>
              </FieldGroup>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

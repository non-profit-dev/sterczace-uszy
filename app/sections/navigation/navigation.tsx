"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui"
import { cn } from "@/lib/utils"

import data, { hasLinks } from "./data"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 flex w-full justify-center bg-white px-6 shadow-sm">
      <div className="w-full max-w-6xl py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/sterczace-uszy.png"
              alt="Fundacja Sterczące Uszy"
              width={200}
              height={50}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList>
              {data.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {hasLinks(item) ? (
                    <>
                      <NavigationMenuTrigger className="hover:text-primary-500 data-[state=open]:text-primary-500 text-gray-600">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-60 gap-1 p-1">
                          {item.links.map((link, linkIndex) => (
                            <ListItem key={linkIndex} title={link.title} href={link.href}>
                              {link.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "hover:text-primary-500 text-gray-600"
                      )}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild size="md" className="hidden lg:flex">
            <Link href="/wsparcie">Wesprzyj nas</Link>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:text-primary-500 p-2 text-gray-600 lg:hidden"
            title="Pokaż/Ukryj menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 lg:hidden">
            <ul className="flex flex-col gap-2">
              {data.map((item, index) => (
                <li key={index}>
                  {hasLinks(item) ? (
                    <details className="group">
                      <summary className="hover:text-primary-500 flex cursor-pointer list-none items-center justify-between py-2 font-semibold text-gray-600 transition-colors">
                        {item.title}
                        <svg
                          className="h-4 w-4 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <ul className="mt-2 ml-4 flex flex-col gap-2">
                        {item.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="hover:text-primary-500 block py-2 text-gray-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-primary-500 block py-2 font-semibold text-gray-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-100 focus:text-primary-500 block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
          )}
        >
          <div className="mb-1 text-sm leading-none font-medium">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">{children}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

import "@/styles/globals.css";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link"
import { type JSX, type SVGProps } from "react"
import { Input } from "@/components/ui/input";
import DarkModeToggle from "@/components/Dashboard/DarkModeToggle";
import { CookiesProvider } from 'next-client-cookies/server';
import { redirect } from 'next/navigation'
import { getServerAuthSession } from "@/server/auth";

export const metadata = {
  title: "Pokemon Playthroughs - Vanilla Fire Red",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = [
    {
      name: "Sessions",
      href: "/dashboard/sessions",
      icon: NewspaperIcon,
      current: false,
    },
    {
      name: "Pokemon",
      href: "/dashboard/pokemon",
      icon: ImageIcon,
      current: false,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: PersonStandingIcon,
      current: false,
    },
  ]

  const darkMode = cookies().get('darkMode');

  const session = await getServerAuthSession();
  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  const approvedUserEmails = [
    "liquidshadows99@gmail.com",
    "official.xenogelion@gmail.com",
    "the.authority@gmail.com",
  ]
  if (!session.user.email) {
    redirect('/')
  }

  if (!approvedUserEmails.includes(session.user.email)) {
    redirect('/')
  }

  return (
    <html lang="en">
      <body className={darkMode?.value === 'true' ? 'font-sans dark' : 'font-sans'}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <CookiesProvider>
            <div className="grid min-h-screen w-full grid-cols-[280px_1fr] text-neutral-900 bg-white dark:bg-neutral-900 dark:text-neutral-50">
              <div className="flex flex-col gap-4 bg-neutral-100/40 dark:bg-neutral-800/40">
                <header className="flex h-[60px] items-center border-b px-6">
                  <Link className="flex items-center gap-2 font-semibold" href="#">
                    <PlaneIcon className="h-6 w-6" />
                    <span>Pokemon Playthroughs</span>
                  </Link>
                </header>
                <nav className="flex-1 overflow-auto py-2 px-4 space-y-2">
                  {pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                    >
                      <page.icon className="h-6 w-6" />
                      {page.name}
                    </Link>
                  ))}

                </nav>
              </div>
              <main className="flex flex-col gap-4">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-neutral-100/40 px-6 dark:bg-neutral-800/40">
                  <div className="w-full flex-1">
                    <form>
                      <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                        <Input
                          className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-neutral-950"
                          placeholder="Search..."
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                  <DarkModeToggle />
                </header>
                <div className="px-4">
                  {children}
                </div>

              </main>
            </div>
          </CookiesProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function NewspaperIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}


function PersonStandingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}


function PlaneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
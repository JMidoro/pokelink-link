'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"

export default function NavUser() {
  return (
    <div className="bg-black fixed top-0 left-0 w-screen z-20">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden absolute top-4 left-4 text-white z-20 hover:text-neutral-400 bg-black hover:bg-neutral-800" size="icon" variant="outline">
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen bg-black text-white border-none">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/dashboard">
              Dashboard
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/api/auth/signout">
              Sign Out
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden md:flex bg-black w-screen">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-neutral-200 focus:bg-neutral-800 focus:text-neutral-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-800/50 data-[state=open]:bg-neutral-800/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-neutral-200 focus:bg-neutral-800 focus:text-neutral-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-800/50 data-[state=open]:bg-neutral-800/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/api/auth/signout"
            >
              Sign Out
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
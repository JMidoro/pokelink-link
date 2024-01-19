'use client'
import { JSX, SVGProps, use } from "react"
import { useCookies } from 'next-client-cookies';
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const DarkModeToggle = () => {
    const cookies = useCookies();
    const router = useRouter();
    const darkMode = cookies.get('darkMode');

    async function toggleDarkMode() {
        if (darkMode === "true") {
            cookies.set('darkMode', "false");
            router.refresh();
        } else {
            cookies.set('darkMode', "true");
            router.refresh();
        }

    }

    return (
        <Button className="h-8 w-8" size="icon" onClick={toggleDarkMode}>
            {darkMode === "true" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            <span className="sr-only">Toggle dark mode</span>
        </Button>
    )
}

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}


function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}

export default DarkModeToggle
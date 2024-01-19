import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-screen grid md:grid-cols-3 gap-0 overflow-hidden">
            <Link href="/player/joeyzero" className="w-full h-screen max-h-[33vh] md:max-h-screen md:h-screen border relative group">
                <div className="border absolute top-0 left-0 w-full h-full md:h-full blur-sm opacity-20 saturate-50 transition group-hover:blur-none group-hover:opacity-100 group-hover:saturate-100" style={{ backgroundImage: 'url("/creators/joey-bg.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                <div
                    className="absolute left-0 top-0 h-full md:h-[80vh] min-w-24 grow transition duration-150 scale-50 md:group-hover:scale-125 w-full z-[2]"
                    style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url("/creators/joey-logo.png")`,
                    }}
                />
                <div className="md:opacity-0 group-hover:opacity-100 transition duration-1000 text-2xl md:text-4xl lg:text-6xl xl:text-8xl teko absolute bottom-6 md:bottom-12 text-center w-full text-white md:scale-75 md:group-hover:scale-125">
                    Joey Zero
                </div>
            </Link>
            <Link href="/player/joeyzero" className="w-full h-screen max-h-[33vh] md:max-h-screen md:h-screen border relative group">
                <div className="absolute top-0 left-0 w-full h-full blur-sm opacity-20 saturate-50 transition group-hover:blur-none group-hover:opacity-100 group-hover:saturate-100" style={{ backgroundImage: 'url("/creators/xeno-bg.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                <div
                    className="absolute left-0 top-0 h-full md:h-[80vh] min-w-24 grow transition duration-150 scale-50 md:group-hover:scale-125 w-full z-[2]"
                    style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url("/creators/xeno-logo.png")`,
                    }}
                />
                <div className="md:opacity-0 group-hover:opacity-100 transition duration-1000 text-2xl md:text-4xl lg:text-6xl xl:text-8xl teko absolute bottom-6 md:bottom-12 text-center w-full text-white md:scale-75 md:group-hover:scale-125">
                    Xenogelion
                </div>
            </Link>
            <Link href="/player/joeyzero" className="w-full h-screen max-h-[33vh] md:max-h-screen md:h-screen border relative group">
                <div className="absolute top-0 left-0 w-full h-full blur-sm opacity-20 saturate-50 transition group-hover:blur-none group-hover:opacity-100 group-hover:saturate-100" style={{ backgroundImage: 'url("/creators/nasuth-bg.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                <div
                    className="absolute left-0 top-0 h-full md:h-[80vh] min-w-24 grow transition duration-150 scale-50 md:group-hover:scale-125 w-full z-[2]"
                    style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url("/creators/nasuth-logo.png")`,
                    }}
                />
                <div className="md:opacity-0 group-hover:opacity-100 transition duration-1000 text-2xl md:text-4xl lg:text-6xl xl:text-8xl teko absolute bottom-6 md:bottom-12 text-center w-full text-white md:scale-75 md:group-hover:scale-125">
                    Nasuth
                </div>
            </Link>
        </div>
    )
}
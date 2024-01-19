import Link from "next/link"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pb-4 pt-10  px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 container">
        <Card className="col-span-1 p-4 border-neutral-700">
          <CardHeader className="p-0">
            <CardTitle className="text-4xl font-semibold mb-2 teko text-neutral-100">Joey Zero</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-4 gap-4">
            <ul className="space-y-1 col-span-1">
              <li>
                <Link className="text-neutral-300 hover:text-white" href="#">
                  Pokemon
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="#">
                  Twitch
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="#">
                  YouTube
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="#">
                  Discord
                </Link>
              </li>
            </ul>
            <div className="col-span-3 text-xs text-neutral-400">I&apos;m Joey.<br />I made this site.<br />I also make music and stuff.</div>
          </div>
        </Card>
        <Card className="col-span-1 p-4 border-neutral-700">
          <CardHeader className="p-0">
            <CardTitle className="text-4xl font-semibold mb-2 teko text-neutral-100">Xenogelion</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-4 gap-4">
            <ul className="space-y-1 col-span-1">
              <li>
                <Link className="text-neutral-300 hover:text-white" href="xenogelion">
                  Pokemon
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="https://youtube.com/xenogelion">
                  YouTube
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="https://twitch.tv/xenogelion2">
                  Twitch
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="https://bsky.app/profile/xenogelion.bsky.social">
                  Bluesky
                </Link>
              </li>
            </ul>
            <div className="col-span-3 text-xs text-neutral-400">When I asked Xeno for a blurb for this section all he did was turn on his webcam and point to his weeb collection... so he&apos;s into anime and video games... or something?</div>
          </div>
        </Card>
        <Card className="col-span-1 p-4 border-neutral-700">
          <CardHeader className="p-0">
            <CardTitle className="text-4xl font-semibold mb-2 teko text-neutral-100">Nasuth</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-4 gap-4">
            <ul className="space-y-1 col-span-1">
              <li>
                <Link className="text-neutral-300 hover:text-white" href="nasuth">
                  Pokemon
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="https://twitch.tv/nasuth">
                  Twitch
                </Link>
              </li>
              <li>
                <Link className="text-neutral-300 hover:text-white" href="https://bsky.app/profile/nasuth.bsky.social">
                  Bluesky
                </Link>
              </li>
            </ul>
            <div className="col-span-3 text-xs text-neutral-400">Nasuth is too old for this crap, but he does it anyway because frankly it&apos;s fun streaming. Catch him rather inconsistently on Twitch, usually doing something that annoys Xenogelion.</div>
          </div>
        </Card>
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link className="text-neutral-300 hover:text-white" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="text-neutral-300 hover:text-white" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="text-neutral-300 hover:text-white" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="text-neutral-300 hover:text-white" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div> */}
      </div>
      <div className="mt-10 border-t border-neutral-700 p-4 text-center text-sm text-neutral-500">
        <p>© Pokémaniacs 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

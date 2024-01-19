'use client'
import * as React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const RulesSection = () => {
    const rules = [
        {
            title: "Nicknames",
            description: "All Pokemon must be nicknamed to increase the bond between trainer and Pokemon.",
        },
        {
            title: "No state saving",
            description: "Save scumming, gamesharks, and other hacks or cheats are generally prohibited.*",
            footer: "*Exceptions made for randomization tools and replayable trainer battles to avoid soft-locking."
        },
        {
            title: "Restart on wipe",
            description: "A black out/white out is considered to be \"game over\". On wipe, the wiping player must restart with a new randomizer seed.",
        },
        {
            title: "Fainting = Death",
            description: "If a pokemon faints, it is considered dead. It must be released or boxed indefinitely.",
        },
        {
            title: "Party Only",
            description: "Can only have six pokemon at max. Can not use the pc system or daycare to store pokemon, and can not release intentionally.",
        },
        {
            title: "Donations",
            description: "Each player must do their best to implement and play according to the campaign donation incentives.",
        }
    ]
    return (
        <section className="py-8 w-full" id="rules">
            <div className="container text-white w-full flex flex-col justify-items-center content-center place-content-center align-middle">
                <h1 className="text-4xl font-bold text-white teko uppercase m-0 w-full max-w-screen bg-black rounded-xl text-center p-4">Playthrough Rules</h1>
                <div className="grid md:grid-cols-3 gap-4">
                    {rules.map((rule, index) => (
                        <div key={index} className="w-full max-w-screen lg:basis-1/3 my-8 h-full">
                            <div className="h-full">
                                <Card className="border-neutral-700 bg-black shadow-lg w-full max-w-screen grow h-full flex flex-col justify-evenly p-0">
                                    <CardHeader className="flex items-center justify-center py-0 w-full max-w-screen">
                                        <CardTitle className="text-2xl w-full max-w-screen">
                                            {rule.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-center px-6 w-full max-w-screen">
                                        <span className="font-semibold w-full max-w-screen">{rule.description}</span>
                                    </CardContent>
                                    <CardFooter className="text-xs italic align-bottom py-0 mb-0 min-h-12">
                                        {rule.footer}
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
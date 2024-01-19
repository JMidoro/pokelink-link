import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "./ui/card"

export const FaqSection = () => {
    const faqs = [
        {
            title: "Why did you pick St. Jude?",
            content: "St. Jude's consistently gets high scores from charity tracker websites. The cause of helping children means helping the future."
        },
        {
            title: "How can I be sure the money's going to the charity?",
            content: "We use Tiltify, which is a trusted middleman between groups like us and the charity involved. We never have any access to the money itself, it goes directly to Tiltify."
        },
        {
            title: "It sounds like you all hate each other, why are you doing this together?",
            content: "It may seem like that, but it's really just how we show each other love!"
        },
        {
            title: "How did you decide your random game starts?",
            content: "We did a randomizer some months ago, and Xeno kindly created 75 variations for us to choose from!"
        },
        {
            title: "Do you play the same seed when restarting?",
            content: "No! We use a random spinner to pick a new one, and every time one is used, it's removed from the pool."
        },
        {
            title: "Do the Pokemon battles between the streams count towards a game reset?",
            content: "No. If they did, we'd never get past the first gym!"
        },
        {
            title: "What happens if I donate to make you catch the next Pokemon, and you're in the middle of a battle?",
            content: "If we're not in battle, it's definitely the next one encountered! But if we ARE in a battle, then we can decide if we want to end that battle with a capture, or if we want to capture the next one we encounter."
        },
        {
            title: "Are you using any cheats?",
            content: "Only one, the ability to refight trainers, and we're only using that to keep from getting soft-locked by money woes."
        },
        {
            title: "Is there a winner?",
            content: "Whoever's furthest when the stream ends! So if Nasuth was on town 5 but has to reset right before the end, and Xeno is in town 3, and Joey's in town 2, Xeno would win! If by some miracle, we finish the game, then it's whomever has the most Laps + the furthest that game."
        },
        {
            title: "Why is there a timer next to Xeno's name?",
            content: "If there are enough donations(at $250, $500, and $750), Xeno has to eat some super spicy noodles, while timing how long he takes to get through it. Why? If we hit the full $1000, he has to spend that same amount of time on an exercise bike!!"
        }
    ]
    return (
        <section className="my-8" id="faq">
            <div className="container text-white">
                <h1 className="text-4xl font-bold text-white teko uppercase m-0 w-full max-w-screen bg-black rounded-xl text-center p-4">FAQ</h1>
                <Card className="container my-4 bg-black border-neutral-700">
                    <Accordion type="single" collapsible className="w-full px-8 pt-4 pb-12">
                        {
                            faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-neutral-800">
                                    <AccordionTrigger className="text-3xl teko">{faq.title}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-xl m-12">{faq.content}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </Card>
            </div>
        </section>
    )
}
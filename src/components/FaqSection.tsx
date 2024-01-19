import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "./ui/card"

export const FaqSection = () => {
    return (
        <section className="my-8" id="faq">
            <div className="container text-white">
                <h1 className="text-4xl font-bold text-white teko uppercase m-0 w-full max-w-screen bg-black rounded-xl text-center p-4">FAQ</h1>
                <Card className="container my-4 bg-black border-neutral-700">
                    <Accordion type="single" collapsible className="w-full px-8 pt-4 pb-12">
                        <AccordionItem value="item-1" className="border-neutral-800">
                            {/* <AccordionTrigger>Is it accessible?</AccordionTrigger> */}
                            <AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-neutral-800">
                            {/* <AccordionTrigger>Is it styled?</AccordionTrigger> */}
                            <AccordionTrigger className="text-xl">Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-neutral-800">
                            {/* <AccordionTrigger>Is it animated?</AccordionTrigger> */}
                            <AccordionTrigger className="text-xl">Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
        </section>
    )
}
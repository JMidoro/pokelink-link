/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Separator } from "./ui/separator";
import Image from "next/image";
import { api } from "@/trpc/server";

interface Money {
    currency: string;
    value: string;
}

interface Avatar {
    alt: string;
    height: number;
    src: string;
    width: number;
}

interface Livestream {
    channel: string;
    type: string;
}

interface Social {
    discord: string | null;
    facebook: string | null;
    instagram: string | null;
    snapchat: string | null;
    tiktok: string | null;
    twitch: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
}

interface Team {
    avatar: Avatar;
    description: string;
    id: string;
    legacy_id: number;
    name: string;
    slug: string;
    social: Social;
    total_amount_raised: Money;
    url: string;
}

interface Campaign {
    amount_raised: Money;
    avatar: Avatar;
    cause_id: string;
    currency_code: string;
    description: string;
    donate_url: string;
    fundraising_event_id: string | null;
    goal: Money;
    has_schedule: boolean;
    id: string;
    inserted_at: string;
    legacy_id: number;
    livestream: Livestream;
    name: string;
    original_goal: Money;
    published_at: string;
    retired_at: string | null;
    slug: string;
    status: string;
    supportable: string;
    supporting_amount_raised: Money;
    team: Team;
    team_id: string;
    total_amount_raised: Money;
    updated_at: string;
    url: string;
    user: unknown | null;
    user_id: string | null;
}

interface CampaignResponse {
    data: Campaign | undefined;
    error: object | undefined;
}


interface Contact {
    address_line1: string;
    address_line2: string | null;
    city: string;
    country: string;
    email: string;
    postal_code: string;
    region: string;
}

interface Cause {
    avatar: Avatar; // Reuse Avatar interface from previous example
    contact: Contact;
    currency_code: string;
    description: string;
    government_id: string;
    id: string;
    inserted_at: string;
    legacy_id: number;
    name: string;
    short_description: string;
    slug: string;
    social: Social; // Reuse Social interface from previous example
    updated_at: string;
}

interface CauseResponse {
    data: Cause;
}

interface RewardAmount {
    currency: string;
    value: string;
}

interface RewardImage {
    alt: string;
    height: number;
    src: string;
    width: number;
}

interface Reward {
    active: boolean;
    amount: RewardAmount;
    description: string;
    ends_at: string | null;
    fair_market_value: string | null;
    highlighted: boolean;
    id: string;
    image: RewardImage;
    inserted_at: string;
    legacy_id: number;
    name: string;
    quantity: number | null;
    quantity_remaining: number | null;
    starts_at: string | null;
    updated_at: string;
}

interface RewardsMetadata {
    after: string | null;
    before: string | null;
    limit: number;
}

interface RewardsResponse {
    data: Reward[];
    metadata: RewardsMetadata;
}



export const CampaignSection = async () => {
    const formatCurrency = (amount: number | string, currency: string) => {
        if (typeof amount === 'string') amount = parseInt(amount);
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount);
    }

    const tiltifyQuery = api.tiltify.getToken.query();
    const tiltifyToken = await tiltifyQuery;
    if (!tiltifyToken) return (<h1 className="text-white text-8xl">No Tiltify??!?!</h1>)
    // if (tiltifyToken) return (<pre className="text-white">{JSON.stringify(tiltifyToken, null, 2)}</pre>)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${tiltifyToken.token}`);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const tiltify: CampaignResponse = await fetch("https://v5api.tiltify.com/api/public/team_campaigns/by/slugs/the-fiveheads/2024-charity-stream", requestOptions as RequestInit)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    if (!tiltify.data) return (<h1>No Tiltify</h1>)

    const cause: CauseResponse = await fetch(`https://v5api.tiltify.com/api/public/causes/${tiltify.data.cause_id}`, requestOptions as RequestInit)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    const rewards: RewardsResponse = await fetch(`https://v5api.tiltify.com/api/public/team_campaigns/${tiltify.data.id}/rewards`, requestOptions as RequestInit)
        .then(response => response.json())
        .catch(error => console.log('error', error));


    const goalAmount = parseInt(tiltify.data.goal.value);
    const raisedAmount = parseInt(tiltify.data.amount_raised.value);
    const percentRaised = Math.round((raisedAmount / goalAmount) * 100);
    return (
        <section className="my-8" id="campaign">
            <div className="container text-white">
                <Card className="bg-black p-4 border-neutral-700">
                    <CardContent>
                        <div className="md:grid grid-cols-2 gap-4">
                            <div>
                                <Image className="py-4" src={tiltify.data.avatar.src} alt={tiltify.data.name} width={64} height={64} />
                                <h1 className="text-4xl font-bold text-white teko uppercase p-0 m-0">{tiltify.data.name}</h1>
                                <div>{tiltify.data.description}</div>

                                <div className="py-4 my-4">
                                    <Progress className="text-white border border-white" value={percentRaised} max={100} />
                                    <div className="text-xs text-neutral-200 bg-neutral-800 inline-block px-2">{formatCurrency(tiltify.data.amount_raised.value, tiltify.data.amount_raised.currency)} / {formatCurrency(tiltify.data.goal.value, tiltify.data.goal.currency)}</div>
                                </div>
                                <Link href={`https://donate.tiltify.com/${tiltify.data.id}`} target="_blank">
                                    <Button variant="default" className="bg-neutral-700 text-white">Give Now</Button>
                                </Link>

                            </div>
                            <div>
                                <Image className="py-4" src={cause.data.avatar.src} alt={cause.data.name} width={64} height={64} />
                                <h1 className="text-4xl font-bold text-white teko uppercase p-0 m-0">{cause.data.name}</h1>
                                <div>{cause.data.description}</div>
                                {
                                    cause.data.social.website && (
                                        <Link href={`https://${cause.data.social.website}`}>Official Website</Link>
                                    )
                                }
                            </div>
                        </div>

                        <Separator className="my-8" />
                        <h1 className="text-4xl font-bold text-white teko uppercase p-0 m-0">Rewards</h1>
                        <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                            {rewards.data.map((reward: Reward, index: number) => {
                                if (!reward.active) return null;
                                return (
                                    <Card key={index} className="bg-black border-neutral-700 pt-2 flex flex-col my-4 md:my-0">
                                        <CardContent className="grow">
                                            <h1 className="text-2xl font-bold text-white teko uppercase p-0 mt-2">{reward.name}</h1>
                                            <div className="text-xs bg-neutral-800 inline-block px-2">{formatCurrency(reward.amount.value, reward.amount.currency)}</div>
                                            <div className="my-2">{reward.description}</div>
                                        </CardContent>
                                        <CardFooter className="align-bottom mb-0">
                                            <Link target='_blank' href={`https://donate.tiltify.com/${tiltify.data?.id}/incentives?rewardPublicId=${reward.id}`}>
                                                <Button variant="default" className="bg-neutral-700 text-white">Get This Reward</Button>
                                            </Link>

                                        </CardFooter>
                                    </Card>
                                )
                            })}
                        </div>
                        {/* <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Campaign Json</AccordionTrigger>
                                <AccordionContent>
                                    <pre>{JSON.stringify(tiltify, null, 2)}</pre>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Cause Json</AccordionTrigger>
                                <AccordionContent>
                                    <pre>{JSON.stringify(cause, null, 2)}</pre>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Rewards Json</AccordionTrigger>
                                <AccordionContent>
                                    <pre>{JSON.stringify(rewards, null, 2)}</pre>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion> */}

                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
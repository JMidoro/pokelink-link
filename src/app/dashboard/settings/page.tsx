import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerAuthSession();
    if (!session?.user) {
        redirect('/api/auth/signin')
    }

    return (
        <>
            <h1 className="font-semibold text-lg md:text-2xl mb-4">Content Area</h1>
            <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </>
    )
}


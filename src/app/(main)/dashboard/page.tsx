import { getServerSession } from "@/lib/get-session";
import { Metadata } from "next";
import { unauthorized } from "next/navigation";

export const metadata: Metadata = {
    title: "Dashboard",
}

export default async function DashBoardPage(){
    const session = await getServerSession();
    const user = session?.user;
     if (!user) unauthorized();


    return (
        <h1>hello world</h1>
    )
}
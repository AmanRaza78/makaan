import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { use } from "react";

export async function GET(){
    const {getUser} = await getKindeServerSession()
    const user = await getUser()

    if(!user || user===null || !user.id){
        throw new Error("Something went wrong!!")
    }

    const dbUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })

    if (!dbUser){
        await prisma.user.create({
            data:{
                id: user.id,
                firstName: user.given_name??"",
                lastName: user.family_name??"",
                email: user.email ?? ""
            }
        })

        return NextResponse.redirect("http://localhost:3000/")
    }
}
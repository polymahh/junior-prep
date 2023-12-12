"use server"

import { db } from "@/db";
import { getServerSession } from "next-auth";

export const createTeam = async (values:any)=>{

    try{
     const session = await getServerSession()

     if(!session){
        return {messge:"not authenticated"}
     }

     const user = await db.user.findUnique({
        where:{
            email: session.user?.email as string
        }
     })

     
    

    }catch(e){
        return (e as Error).message

    }
}

import Roles from "@/components/roles";
import { db } from "@/db";
import { create } from "domain";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import * as z from "zod"

const teamSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    creatorRole: z.string({ required_error: "choose at least one role" }),
    roles: z
      .object({
        active: z.boolean(),
        name: z.string(),
        stack: z.string(),
      })
      .array()
      .nonempty({
        message: "You have to select at least one role.",
      }),
  })

  export async function POST(req : Request){

    try{
      console.log("🚀palce ")
        const body = await req.json();
    
        const { name , description, repo, roles } = teamSchema.parse(body);
     const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

     const user = await db.user.findUnique({
        where:{
            email: "otman.elkantaoui@gmail.com"
            // email: session.user?.email as string
        }
     })

     const team = await db.team.create({
        data:{
            creatorId: user?.id!,
            adminId:user?.id!,
            Project:{
                create : [
                    {
                        name,
                        description,
                        githubRepo : repo,
                        
                    }
                ]
            },
            Role:{
              create : roles.filter(role => role.active).map(role => {
                return {
                  roleName:role.name,
                  stack:role.stack
                }
              }
                
                )
            }
            
        }
     })
     return Response.json({team: team , message: "team created successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}
import { db } from "@/db";
import { roleSchema } from "@/lib/validators/roles";
import { roleName } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req : Request, {params}: {params:{teamId:string}}){

    try{
        const {teamId} = params
        if (!teamId) {return NextResponse.json({message: 'Missing Team Id'},{status: 400})}


        const body = await req.json();
        const { name , stack } = roleSchema.parse(body);
        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const team = await db.team.findUnique({
        where:{
          id:teamId
        }
      })

    const user = await db.user.findUnique({
        where:{
            id:team?.creatorId as string
        }
    })

    if(session?.user?.email !== user?.email){
        return Response.json({message:"You are not authorized"},{status:401})
    }

     const role = await db.role.create({
        data:{
            roleName:name as roleName,
            stack,
            team : {
                connect:{
                    id: teamId
                }
            }
        }
        
     })
     return Response.json({role: role , message: "role created successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}
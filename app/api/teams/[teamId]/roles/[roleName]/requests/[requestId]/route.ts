import { db } from "@/db";
import { requestSchema } from "@/lib/validators/request";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export async function PUT(req : Request, {params}: {params:{teamId:string,roleName:string,requestId : string}}){

    try{
        
        const {teamId,roleName,requestId} = params
        if (!roleName || !teamId || !requestId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const body = req.body

        const {email,isAccepted} = requestSchema.parse(body)

        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

        const user = await db.user.findUnique({
            where:{
                email:email
            }
        })

        if(session?.user?.email !== user?.email){
            return Response.json({message:"You are not authorized"},{status:401})
        }

        const team = await db.team.findUnique({
            where:{
                id:teamId
            }
        })

        if(team?.adminId !== user?.id){
            return Response.json({message:"You are not authorized"},{status:401})
        }

    

   const request =  await db.request.update({
        where:{
            id:requestId
        },
        data:{
            isAccepted:isAccepted
        }
        
      })
    
     return Response.json({role: request , message: "request updated successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}


export async function DELETE({params}: {params:{teamId:string,roleName:string,requestId : string}}){

    try{
        
        const {teamId,roleName,requestId} = params
        if (!roleName || !teamId || !requestId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

        const request = await db.request.findUnique({
            where:{
                id:requestId
            }
        })

        if(session?.user?.email !== request?.userEmail){
            return Response.json({message:"You are not authorized"},{status:401})
        }

    

    await db.request.delete({
        where:{
            id:requestId
        }
        
      })
    
     return Response.json({message: "request deleted successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}

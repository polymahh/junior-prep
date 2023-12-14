import { db } from "@/db";
import { roleSchema } from "@/lib/validators/roles";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req : Request, {params}: {params:{teamId:string,roleName:string}}){

    try{
        // 
        const {teamId,roleName} = params
        if (!roleName || !teamId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const session = await getServerSession()

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const team = await db.team.findUnique({
        where:{
          id:teamId
        },
        include:{
            Role:true
        }
      })
    
     return Response.json({role: team , message: "role created successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}


export async function PUT(req : Request, {params}: {params:{teamId:string,roleName:string}}){

    try{
        
        const {teamId,roleName} = params
        if (!roleName || !teamId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

        const body = req.body

        const {name, stack} = roleSchema.parse(body)

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
            id:team?.creatorId
        }
    })

    if(session?.user?.email !== user?.email){
        return Response.json({message:"You are not authorized"},{status:401})
    }

   const role =  await db.role.update({
        where:{
            roleName_teamId:{roleName,teamId}
        }

        ,
        data:{
            roleName:name,
            stack
        }
        
      })
    
     return Response.json({role: role , message: "role created successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}


export async function DELETE(req : Request, {params}: {params:{teamId:string,roleName:string}}){

    try{
        
        const {teamId,roleName} = params
        if (!roleName || !teamId) {return NextResponse.json({message: 'Missing param'},{status: 400})}

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
            id:team?.creatorId
        }
    })

    if(session?.user?.email !== user?.email){
        return Response.json({message:"You are not authorized"},{status:401})
    }

   const role =  await db.role.delete({
        where:{
            roleName_teamId:{roleName,teamId}
        }
      })
    
     return Response.json({role: role , message: "role deleted successfully"}, {status : 201})
    }catch(error){

        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }
}
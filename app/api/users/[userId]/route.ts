import { db } from "@/db";
import { userSchema } from "@/lib/validators/users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET({params}:{params:{userId:string}}){
    try{

        const {userId} = params

    if (!userId) {
        return NextResponse.json(
          {
            message: 'Missing user Id',
          },
          {
            status: 400,
          },
        );
      }

    const session = await getServerSession()
    //  if(!session){                           
    //     return {messge:"not authenticated"}
    //  }

    const user = await db.user.findUnique({
        where:{
            id:userId,
        },
        
    })

    if (!user) {
        return NextResponse.json({message: 'Missing user'},{status: 400});
      }

    return Response.json({team:user,message:"user found"},{status:201})

    }catch(error){
        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})
    }
}


export async function PUT(req:Request, {params}:{params:{userId:string}}){
    try{

    const {userId} = params

    if (!userId) {return NextResponse.json({message: 'Missing user Id'},{status: 400})} 

        const body = req.body
        const {name, username, email, image, githubId, discordId} = userSchema.parse(body)

    
    

    // check if user is authenticaed
    const session = await getServerSession()
    //  if(!session){                           
    //     return {messge:"not authenticated"}
    //  }

    const user = await db.user.findUnique({
        where:{
            id:userId,
        },
        
    })

    if (!user) {
        return NextResponse.json({message: 'Missing user'},{status: 400});
    }

    if(session?.user?.email !== user.email ){
        return NextResponse.json({message:"You are not authorized"}, {status:401})
    }

    const updateUser = await db.user.update({
        where:{
            id:userId
        },
        data:{
            name,
            username,
            email,
            image,
            githubId,
            discordId
        }
    })

    return Response.json({team:updateUser,message:"user updated"},{status:201})

    }catch(error){
        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})
    }
}
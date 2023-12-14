import { db } from "@/db";
import { teamSchema, updateTeam } from "@/lib/validators/teams";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET (req: Request,{params}:{params:{teamId:string}}) {
    
    try{
    const {teamId} = params

    if (!teamId) {
        return NextResponse.json(
          {
            message: 'Missing Team Id',
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

    const team = await db.team.findUnique({
        where:{
            id:teamId,
        },
        include:{
            Project:true,
            Role: true
        }
    })

    return Response.json({team:team,message:"team with ID found"},{status:201})

    }catch(error){
        console.log(error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }

}
export async function PUT (req: Request,{params}:{params:{teamId:string}}) {
    
    try{
        const body = await req.json();
    
        const { name , description, repo, isCompleted } = updateTeam.parse(body);

    const {teamId} = params

    if (!teamId) {
        return NextResponse.json({message: 'Missing Team Id'},{status: 400});
      }

    const session = await getServerSession()
    //  if(!session){                           
    //     return {messge:"not authenticated"}
    //  }

    const project = await db.project.update({
        where:{
            teamId:teamId,
        },
        data:{
            description,
            name,
            githubRepo: repo,
            isCompleted 
            
        },
        include:{
            team:true
        }
    })

    if (!project) {
        return NextResponse.json({message: 'Team not found'},{status: 400});
      }

      if(project?.team.creatorId !== session?.user?.email){
        return Response.json({message:"You are not authorized"},{status:401})
    }

    return Response.json({team:project,message:"Team found"},{status:201})

    }catch(error){
        console.log(error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }

}


export async function DELETE (req: Request,{params}:{params:{teamId:string}}) {
    
    try{
    const {teamId} = params

    if (!teamId) {
        return NextResponse.json(
          {
            message: 'Missing Team Id',
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

    const team = await db.team.findUnique({
        where:{
            id:teamId,
        },
        
    })

    const user = await db.user.findUnique({
        where:{
            id: team?.creatorId
        }
    })
    


    if(user?.email !== session?.user?.email){
        return Response.json({message:"You are not authorized"},{status:401})
    }

    await db.team.delete({
        where:{
            id:teamId,
        },
        
    })

    

    return Response.json({team:team,message:"team with ID found"},{status:201})

    }catch(error){
        console.log(error)
        return Response.json({  message: "Something went wrong!"}, {status : 500})

    }

}


import { db } from "@/db";
import { teamSchema } from "@/lib/validators/teams";
import { roleName } from "@prisma/client";
import { getServerSession } from "next-auth";



  export async function POST(req : Request){

    try{
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
                  roleName:role.name as roleName,
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



export async function GET(req : Request){

  try{
      
   const session = await getServerSession()

  //  if(!session){
  //     return {messge:"not authenticated"}
  //  }

   

   const team = await db.team.findMany({
      include:{
        Project:{
          where:{
            isCompleted:false
          }
        }
      }
   })
   return Response.json({team: team , message: "team created successfully"}, {status : 201})
  }catch(error){
      console.log("🚀 ~ file: route.ts:90 ~ GET ~ error:", error)
      return Response.json({  message: "Something went wrong!"}, {status : 500})

  }
}

import { db } from "@/db";
import { teamSchema } from "@/lib/validators/teams";
import { roleName } from "@prisma/client";
import { getServerSession } from "next-auth";



  export async function POST(req : Request){

    try{
        const body = await req.json();
        console.log("🚀 ~ file: route.ts:13 ~ POST ~ body:", body)
        
        const { name , description, repo, roles, creatorRole } = teamSchema.parse(body);
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
            creatorRole:creatorRole as roleName,
            Project:{
                create : {
                        name,
                        description,
                        githubRepo : repo,
                    }
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
          select:{
            name:true,
            githubRepo:true,
            description:true,
            isCompleted:true,
            createdAt:true
        }
        },
        Role:true,
        creator:{
          include:{
            UserRole:true
          }
        }
      }
   })

   const teams = team.map((team)=> {
    const {Project, Role: roles, ...rest} = team
    return {project : Project[0], roles, ...rest}
   })
   return Response.json({teams , message: "teams list success"}, {status : 201})
  }catch(error){
      console.log("🚀 ~ file: route.ts:90 ~ GET ~ error:", error)
      return Response.json({  message: "Something went wrong!"}, {status : 500})

  }
}
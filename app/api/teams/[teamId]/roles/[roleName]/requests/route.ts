import { db } from "@/db"
import { requestSchema } from "@/lib/validators/request"
import { roleName as rName } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST( req:Request , {params}:{params:{teamId:string,roleName :string}}) {

    try {
        const {teamId, roleName} = params

        if(!teamId || !roleName){
            return NextResponse.json({message:"missing params"}, {status:400})
        }

        const body = req.body

        const { email } = requestSchema.parse(body)

        // const role = await db.role.findUnique({
        //     where:{
        //         roleName_teamId: 
        //     }
        // })

        const request = await db.request.create({
            data:{
                isAccepted : false,
                role:{
                    connect:{
                        roleName_teamId:{roleName: roleName as rName,teamId}
                    }
                },
                user :{
                    connect:{
                        email:email
                    }
                }
            }
        })

        return NextResponse.json({comment:request , message: "request sent successfully"},{status: 201})

        
    } catch (error) {

        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
        
    }
    
}
import { db } from "@/db";
import { commentSchema } from "@/lib/validators/comment";
import { NextResponse } from "next/server";

export async function GET ({params} : {params:{teamId:string}}) {

    try {

        const {teamId} = params

        if(!teamId){
            return NextResponse.json({message:"missing team Id"}, {status:400})
        }

        const project = await db.project.findUnique({
            where: {
                teamId: teamId
            },
            include:{
                comment:true
            }
        })

        return NextResponse.json({comments : project, message:"comments found"},{status:201})

        
    } catch (error) {
        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
    }

}

export async function POST(req:Request, {params}:{params:{teamId:string}}) {

    try {
        const {teamId} = params

        if(!teamId){
            return NextResponse.json({message:"missing team Id"}, {status:400})
        }

        const body = req.body
        const {comment, email} = commentSchema.parse(body)

        

        const newComment = await db.comment.create({
            data:{
                content:comment,
                user:{
                    connect:{
                        email
                    }
                },
                project:{
                    connect:{
                        teamId: teamId
                    }
                }

            }
        })

        return NextResponse.json({comment:newComment , message: "comment sent"},{status: 201})

        
    } catch (error) {

        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
        
    }
    
}
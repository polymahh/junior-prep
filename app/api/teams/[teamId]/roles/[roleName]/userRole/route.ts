import { db } from "@/db"
import { userRoleSchema } from "@/lib/validators/userRole"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"


export async function GET({params}:{params:{teamId:string}}){

    try {

        const {teamId} = params

        if(!teamId){
            return NextResponse.json({message:"missing team Id"}, {status:400})
        }

        const roles = await db.role.findMany({
            where: {
                teamId: teamId
            },
            include:{
                    UserRole:true
            }
        })

        return NextResponse.json({comments : roles, message:"roles found"},{status:201})

        
    } catch (error) {
        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
    }

}


export async function POST(req:Request,{params}:{params:{teamId:string}}){

    try {

        const {teamId} = params

        if(!teamId){
            return NextResponse.json({message:"missing team Id"}, {status:400})
        }

        const body = req.body

        const {email,roleId,isAdmin} = userRoleSchema.parse(body)

        if(!email || !roleId || !isAdmin){
            return NextResponse.json({message:"missing params"}, {status:400})
        }

        const session = await getServerSession()

        if(!session || !session?.user?.email){
            return NextResponse.json({message:"your not authorised"}, {status:400})
        }


        
        const roles = await db.role.findMany({
            where:{
                id:teamId
            },
            include:{
                UserRole:true
            }
        }
        )

        const usersEmails = roles.map(item => item.UserRole).flat().map(item => item.userEmail)

        if(!usersEmails.includes(session?.user?.email as string) ){
            return NextResponse.json({message:"your not authorised"}, {status:400})
        }

        const UserRole = await db.userRole.create({
            data:{
                role:{
                    connect:{
                        id:roleId
                    }
                },
                user:{
                    connect:{
                        email:email
                    }
                },
                isAdmin : isAdmin
            }
        })

        return NextResponse.json({comments : UserRole, message:"user_role added successfully"},{status:201})

        
    } catch (error) {
        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
    }

}


export async function DELETE(req:Request,{params}:{params:{teamId:string}}){

    try {

        const {teamId} = params

        if(!teamId){
            return NextResponse.json({message:"missing team Id"}, {status:400})
        }

        const body = req.body

        const {email,roleId} = userRoleSchema.parse(body)

        if(!email || !roleId){
            return NextResponse.json({message:"missing params"}, {status:400})
        }

        const session = await getServerSession()

        if(!session ){
            return NextResponse.json({message:"your not authorised"}, {status:400})
        }
        
        const roles = await db.role.findMany({
            where:{
                id:teamId
            },
            include:{
                UserRole:true
            }
        }
        )

        const usersEmails = roles.map(item => item.UserRole).flat().map(item => item.userEmail)

        if(!usersEmails.includes(session?.user?.email as string) ){
            return NextResponse.json({message:"your not authorised"}, {status:400})
        }

         await db.userRole.delete({
            where:{
                roleId_userEmail:{roleId,userEmail:email}
            }
        })

        return NextResponse.json({ message:"user_role deleted"},{status:201})

        
    } catch (error) {
        console.log("🚀 ~ file: route.ts:8 ~ GET ~ error:", error)
        return NextResponse.json({message:"something went wrong"}, {status:500})
    }

}
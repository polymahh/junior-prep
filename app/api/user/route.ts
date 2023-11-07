import { db } from "@/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from "zod"

const userSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must be less than 50 characters" }),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
  })
 

export async function POST(req : Request) {

    try{
        const body = await req.json();
    
        const { username , email, password, } = userSchema.parse(body);

        // check if the email exist in the db

        const existingEmail = await db.user.findUnique({
            where:{email : email}
        })
        
        if(existingEmail){
            return NextResponse.json({user:null , message:"Email already exists"},{status:409})
        }
        // check if the email exist in the db

        const existingUsername = await db.user.findUnique({
            where:{username : username}
        })
        
        if(existingUsername){
            return NextResponse.json({user:null , message:"Username already exists"},{status:409})
        }
        const hashedPassword = await hash(password,10)
        const newUser = await db.user.create({
            data:{
                username:username,
                email:email,
                password:hashedPassword,
            }
        })

        const {password : newPass , ...rest} = newUser

        return NextResponse.json({user:rest , message: "User created successfully"}, {status : 201})
    }catch (error){
        console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
        return NextResponse.json({  message: "Something went wrong!"}, {status : 500})
    }
}
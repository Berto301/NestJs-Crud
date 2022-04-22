import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

import * as argon from 'argon2'
import { PrismaService } from "src/prisma/prisma.service";
@Injectable({})
export class AuthService{
   constructor(private prisma: PrismaService){

   }
   login(){
    
    return {msg: "Login"}
   }
  async signup(dto:AuthDto){
     const {password,email} = dto
         //generate password hash
    const hash = await argon.hash(password);
    //save the new user
    let user = {}
    console.log("lala2",dto)
    try {
       user = await this.prisma.user.create({
         data: {
           email,
           hash,
         },
         select:{
            id:true,
            email:true,
            lastName:true,
            firstName:true
         }
       });
    } catch (error) {
      console.log(error) 
    } 
  
    //return the user saved
    return user
   }
}

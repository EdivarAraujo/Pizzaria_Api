import prismaClient from "../../prisma";
import { compare} from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserServirse{
  async execute({email, password}: AuthRequest){

    const user = await prismaClient.user.findFirst({
      where:{
        email: email,
      }
    })

    if(!user){
      throw new Error("User/password incorrect")
    }

    //verificar se senha esta correta
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("User/password incorrect")
    }

   //gerar toke JWT e devolver os dados para o usuario 
    const token = sign({ name: user?.name, email: user?.email}, process.env.JWT_SECRET,{ subject:user.id, expiresIn:'30d' })

    return {
      id: user?.id,
      name:user?.name,
      email: user?.email,
      token: token
    }
  }
}

export {AuthUserServirse}
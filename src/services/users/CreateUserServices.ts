import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UseRequest{
  name: string;
  email: string;
  password: string;
}


class CreateUserServices{
  async execute({ name, email, password}: UseRequest){
    //verificar se enviou o email
    if(!email){
     throw new Error("Email incorrect")
    }

    //verificar se ja esta cadastrado
    const userAlreadyExist = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(userAlreadyExist){
      throw new Error("user already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name:name,
        email: email,
        password: passwordHash
      },
      select:{
        id:true,
        email:true,
        name:true
      }
    })

    return user
  }
}

export {CreateUserServices}
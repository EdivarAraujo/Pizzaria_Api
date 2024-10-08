import {Request, Response} from 'express'
import { AuthUserServirse } from "../../services/users/AuthUserServirses"

class AuthUserController{  
  async handle(req: Request, res:Response){
    const {email, password} = req.body

    const authUserService = new AuthUserServirse()

   const auth = await authUserService.execute({
    email,
    password
   })

   return res.json(auth)

  }

}

export {AuthUserController}
import {Request, Response, NextFunction} from 'express'
import { verify } from  'jsonwebtoken'

interface PayLoad{
  sub: string;

}

export function isAuthenticated(req: Request, res:Response, next: NextFunction) {
  // Receber o token
  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(401).json({message: "Não autorizado"});
  }

  const [, token] = authToken.split(" ")

  try {
    //validar o token
    const { sub } = verify( token, process.env.JWT_SECRET ) as PayLoad

    //recuperar o id do tokes e colocar emuma variavel user_id dentro do req.
    req.user_id = sub;
    
    return next()
    
  } catch (error) {
    return res.status(401).json({message: "Verifique seu token e suas credenciais"})
  }

}
import {Request, Response} from 'express'
import { FinishOrderServirse } from '../../services/order/FinishOrderServirse'

class FinishOrderController{
  async handle(req:Request, res:Response){
    
    const { order_id } = req.body

    const finishOrderServirse = new FinishOrderServirse()

    const order = await finishOrderServirse.execute({
      order_id
    })

    return res.json(order)

  }
}

export { FinishOrderController }
import { Request, Response } from 'express'
import { CreateOrderServirses } from '../../services/order/CreateOrderServirses'

class CreateOrderController{
  async handle(req:Request, res:Response){
    const { table, name } = req.body

    const createOrderServirse = new CreateOrderServirses()

    const order = await createOrderServirse.execute({table, name})

    return res.json(order)
     
  }
}

export { CreateOrderController }
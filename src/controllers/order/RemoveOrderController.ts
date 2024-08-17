import { Request, Response } from 'express'
import { RemoverOrderServirses } from '../../services/order/RemoverOrderServirses'

class RemoverOrderController{
  async handle(req:Request, res:Response){

    const order_id = req.query.order_id as string

    const removeOrder = new RemoverOrderServirses()

    const order = await removeOrder.execute({order_id})

    return res.json(order)

  }
}

export { RemoverOrderController }


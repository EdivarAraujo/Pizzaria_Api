import { Request, Response } from 'express'
import { SendOrderServises } from '../../services/order/SendOrderServises'

class SendOrderController{
  async handle(req: Request, res: Response){
    
    const { order_id } = req.body

    const sendOrder = new SendOrderServises()

    const order = await sendOrder.execute({
      order_id
    })

    return res.json(order)


  }
}

export { SendOrderController }
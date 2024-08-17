import { Request, Response } from 'express'
import { AdditemServises } from '../../services/order/AddItemServirses'

class AddItemController{
  async handle(req: Request, res: Response){

    const { order_id, product_id, amount } = req.body

    const addItem = new AdditemServises()

    const order = await addItem.execute({
      amount,
      order_id,
      product_id
    })

    return res.json(order)

  }
}

export { AddItemController }
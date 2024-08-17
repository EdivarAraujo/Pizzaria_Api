import { Request, Response } from 'express'
import { RemoveItemServirces } from '../../services/order/RemoveItemServices'

class RemoveItemController{
  async handle(req:Request, res: Response){

    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItemServirces()

    const order = await removeItemService.execute({
      item_id
    })

    return res.json(order)

  }
}

export { RemoveItemController }
import {Request, Response} from 'express'
import { DetailOrderServirces } from '../../services/order/DetailOrderServirces'


class DetailOrderController{
  async handle(req:Request, res:Response){

    const order_id = req.query.order_id as string

    const detailOrderServirce = new DetailOrderServirces()

    const orders = await detailOrderServirce.execute({
      order_id
    })

    return res.json(orders)


  }
}

export { DetailOrderController }
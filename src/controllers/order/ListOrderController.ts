import {Request, Response} from  'express'
import { ListOrdeesServirses } from '../../services/order/ListOrderServirses'

class ListOrderController{
  async handle(req: Request, res:Response){
     const listOrdersServive = new ListOrdeesServirses()

     const order = await listOrdersServive.execute()

     return res.json(order)
  }
}

export { ListOrderController }
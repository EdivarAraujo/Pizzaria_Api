import { Request, Response } from 'express'
import { ListByCategoryServises } from '../../services/product/ListByCategoryServises'

class ListByCategoryController{
   async handle(req:Request, res:Response){

    const  category_id = req.query.category_id as string
      
    const listByCategory = new ListByCategoryServises()

    const products = await listByCategory.execute({category_id})

    return res.json(products)

  }
}

export { ListByCategoryController }
import {Request, Response} from 'express'
import { ListCategoryServirses } from '../../services/category/ListCategoryServirces'

class ListCategoryController{
  
  async handle(req: Request, res: Response){
    const listCategories = new ListCategoryServirses()
    
    const category = await listCategories.execute()

    return res.json(category)

  }
}

export { ListCategoryController }
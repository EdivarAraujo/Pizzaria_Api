import { Request, Response} from "express"
import { CreateCategpryServices } from "../../services/category/CreateCategoryServices"

class CreateCategoryController{
   async handle(req:Request, res:Response){

     const { name } = req.body

     const createCategoryServirce = new CreateCategpryServices()

     const category = await createCategoryServirce.execute({ name })

     return res.json(category)
   }
}

export { CreateCategoryController}
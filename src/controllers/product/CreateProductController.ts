import {Request, Response} from 'express'
import { CreateProductServises } from "../../services/product/CreateProductServises"

class CreateProductController{
  async handle(req: Request, res: Response){

    const { name, price, description, category_id  } = req.body
    
    const createProductService = new CreateProductServises()

    if(!req.file){
      throw new Error("error upload file")
    } else {
      
      const { originalname, filename: banner } = req.file

      const product = await createProductService.execute({
        name, 
        price, 
        description, 
        banner, 
        category_id
      })

      console.log(product, "EDIVAR")

      return res.json(product)
    }
  }
}

export { CreateProductController }


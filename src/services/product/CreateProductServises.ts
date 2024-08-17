import prismaClient from "../../prisma";

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id:string;
}

class CreateProductServises {
  
  async execute({ name, price, description, banner, category_id }: ProductRequest){

    const categoryExists = await prismaClient.category.findUnique({
      where: { id: category_id },
    });

    if (!categoryExists) {
      throw new Error('Categoria não encontrada');
    }

    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id
      }
    })

    console.log(product, "TESTE")


    return product
   }

}

export { CreateProductServises }
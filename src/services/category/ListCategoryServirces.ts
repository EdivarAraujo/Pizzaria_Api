import prismaClient from "../../prisma";

class ListCategoryServirses{
 async execute(){
    const category  = await prismaClient.category.findMany({ 
      select:{ 
        id: true, 
        name: true
      }
  })

  return category
 }
}

export { ListCategoryServirses }
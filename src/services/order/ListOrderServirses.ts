import prismaClient from "../../prisma";

class ListOrdeesServirses{
  async execute(){
     const order = await prismaClient.order.findMany({
      where:{
        draft: false,
        status: false
      },
      orderBy:{
        created_at: 'desc'
      }
     })

     return order
  }
}

export { ListOrdeesServirses }
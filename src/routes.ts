import { Router} from 'express'
import multer from 'multer'
import { CreCreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from  './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailsUserControllers'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoverOrderController } from './controllers/order/RemoveOrderController'
import { AddItemController } from './controllers/order/AdditemController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from  './controllers/order/SendorderController'
import { ListOrderController } from './controllers/order/ListOrderController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'

import uploadConfig from './config/multer'
const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

//ROTAS USERS
router.post('/users', new CreCreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//rotas CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category/list', isAuthenticated, new ListCategoryController().handle)

//rotas de PRODUCTS
router.post('/product/create', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/product/category', isAuthenticated, new ListByCategoryController().handle)

//rotas ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoverOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)






export {router}


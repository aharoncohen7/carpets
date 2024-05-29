import { createProduct, readProductById, readProducts ,readProduct} from "@/server/DL/controllers/product.controller";


export const createProductService = (data) => createProduct(data)
export const readProductsService = (filter) => readProducts(filter)
export const readProductByIdService = (id) => readProductById(id)
export const readProductByFieldService = (filter) => readProduct(filter)
import { createOrder, readOrderById, readOrders ,readOrder} from "@/server/DL/controllers/order.controller";


export const createOrderService = (data) => createOrder(data)
export const readOrdersService = (filter) => readOrders(filter)
export const readOrderByIdService = (id) => readOrderById(id)
export const readOrderByFieldService = (filter) => readOrder(filter)
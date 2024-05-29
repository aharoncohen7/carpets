import { Order } from "../models/order.model"

export const readOrders = (filter) => Order.find(filter)
export const readOrderById = (id) => Order.findById(id)
export const createOrder =  async (data) => {
    console.log(data);
    const order = await Order.create(data)
    console.log(order);
    return order


}
  
export const readOrder = (filter) => Order.findOne(filter)

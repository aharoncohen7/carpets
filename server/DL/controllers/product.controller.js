import { Product } from "../models/product.model"

export const readProducts = (filter) => Product.find(filter)
export const readProductById = (id) => Product.findById(id)
export const createProduct = (data) => Product.create(data)
export const readProduct = (filter) => Product.findOne(filter)
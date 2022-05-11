import { Router } from "express";
import {Request, Response } from "express";
import { Product } from "./models/Products";

const router = Router()

router.get("/products", async (req: Request, res: Response) => {
    const response = await Product.findAll()
    res.json(response)
})

router.post("/products", async (req: Request, res: Response) => {
    const {name, price} = req.body;
    const newProduct = Product.build({
        name: name,
        price: price,
    })
    await newProduct.save()
    res.json({status: "Produto Criado", product: newProduct})
})

router.put("/products/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const {name, price} = req.body;
    const response = await Product.findByPk(id) 
    if (response) {
        response.name = name
        response.price = price
        response.save()
    }
    res.json({status: "Produto Editado", product: response})
    

})

router.delete("/products/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const response = await Product.findByPk(id) 
    if (response) {
        response.destroy()
    }
    res.json({status: "Produto Excluido"})
})

export default router;
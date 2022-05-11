import 


export const teste = async (req: Request, res: Response) => {
    const [name, price] = req.body;
    const newProduct = Product.build({
        name: name,
        price: price,
    })
    await newProduct.save()
    res.json(`Produto adicionado : ${newProduct}`)
}
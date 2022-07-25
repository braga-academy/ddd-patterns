import Product from '../entity/product'
import ProductService from './product.service'

describe('Product service Unit Tests', () => {
    it('Should change the price in all products', () => {
        const product1 = new Product('p1', 'Produto 1', 10)
        const product2 = new Product('p2', 'Produto 2', 20)

        const products = [product1, product2]

        ProductService.increasePrice(products, 100)

        expect(product1.price).toBe(20)
        expect(product2.price).toBe(40)
    })
})

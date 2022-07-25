import Customer from '../entity/customer'
import Order from '../entity/order'
import OrderItem from '../entity/order_item'
import OrderService from './order.service'

describe('Order service unit tests', () => {

    it('Shoult place an order', () => {

        const customer = new Customer('1', 'Cliente 1')
        const item1 = new OrderItem('i1', 'p1', 1, 'Item 1', 10)

        const order = OrderService.placeOrder(customer, [item1])

        expect(customer.rewardPoints).toBe(5)
        expect(order.total()).toBe(10)
    })

    it('Should throw error when items is empty', () => {
        expect(() => {
            const customer = new Customer('1', 'Cliente 1')
            const order = OrderService.placeOrder(customer, [])
        }).toThrowError('Order must have at least one item')
    })

    it('Should get total of orders', () => {
        const item1 = new OrderItem('i1', 'p1', 1, 'Item 1', 50)
        const item2 = new OrderItem('i2', 'p2', 1, 'Item 2', 20)

        const order1 = new Order('o1', 'c1', [item1, item2])
        const order2 = new Order('o2', 'c2', [item1])

        const total = OrderService.total([order1, order2])

        expect(total).toBe(120)
    })
})

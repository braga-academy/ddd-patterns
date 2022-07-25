import Order from '../entity/order'
import OrderItem from '../entity/order_item'
import OrderService from './order.service'

describe('Order service unit tests', () => {

    it('Should get total of orders', () => {
        const item1 = new OrderItem('i1', 'p1', 1, 'Item 1', 50)
        const item2 = new OrderItem('i2', 'p2', 1, 'Item 2', 20)

        const order1 = new Order('o1', 'c1', [item1, item2])
        const order2 = new Order('o2', 'c2', [item1])

        const total = OrderService.total([order1, order2])

        expect(total).toBe(120)
    })
})

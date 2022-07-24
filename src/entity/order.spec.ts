import Order from './order'
import OrderItem from './order_item'

describe('Order unit tests', () => {

    it('Should throw error when id is empty', () => {
        expect(() => {
            let order = new Order('', '1', [] )
        }).toThrowError('ID is required')
    })

    it('Should throw error when customer_id is empty', () => {
        expect(() => {
            let order = new Order('1', '', [])
        }).toThrowError('CustomerId is required')
    })

    it('Should throw error when items is empty', () => {
        expect(() => {
            let order = new Order('1', '1', [])
        }).toThrowError('Items is required')
    })

    it('Shoud calculate total price from order items', () => {

        const item1 = new OrderItem('1', 'p1', 3, 'Item Test 1', 50)
        const item2 = new OrderItem('2', 'p2', 2, 'Item Test 2', 15)

        const order = new Order('1', '1', [item1, item2])


        expect(order.total()).toBe(180)
    })

    it('Shoud check if the item qtd is less or equal than zero', () => {

        expect(() => {
            const item1 = new OrderItem('1', 'p1', 0, 'Item Test 1', 50)
        }).toThrowError('Quantity must be greater than zero')
    })
})

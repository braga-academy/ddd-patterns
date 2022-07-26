import Address from './domain/entity/address'
import Customer from './domain/entity/customer'
import Order from './domain/entity/order'
import OrderItem from './domain/entity/order_item'

const customer = new Customer("123", "Luciano Braga")

const address = new Address('Rua teste', 2, '62190000', 'Groaíras')

customer.Address = address
customer.activate()

const item1 = new OrderItem('o1', 'p1', 2, 'Item Teste 1', 10)
const item2 = new OrderItem('o2', 'p2', 3, 'Item Teste 2', 20)

const order = new Order('1', customer.id, [item1, item2])

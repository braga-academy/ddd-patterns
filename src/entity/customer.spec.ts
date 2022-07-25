import Address from './address'
import Customer from './customer'

describe('Customer unit tests', () => {

    it('Should throw error when id is empty', () => {

        expect(() => {
            let customer = new Customer('', 'Luciano')
        }).toThrowError('ID is required')

    })

    it('Should throw error when name is empty', () => {

        expect(() => {
            let customer = new Customer('1', '')
        }).toThrowError('Name is required')

    })

    it('Should change name', () => {
        // Triple A

        // Arrange
        const customer = new Customer('1', 'Luciano')

        // Act
        customer.changeName('Ana Beatriz')

        // Assert
        expect(customer.name).toBe('Ana Beatriz')

    })

    it('Should activate a customer', () => {
        // Triple A

        // Arrange
        const customer = new Customer('1', 'Luciano')
        const address = new Address('Street 1', 10, '62178-214', 'New York' )
        customer.Address = address

        // Act
        customer.activate()

        // Assert
        expect(customer.isActive()).toBe(true)
    })

    it('Should throw error when address is undefined when you activate a customer', () => {
        expect(() => {
            const customer = new Customer('1', 'Luciano')
            customer.activate()
        }).toThrowError('Address is mandatory to activate a customer')
    })

    it('Should deactivate a customer', () => {
        const customer = new Customer('1', 'Luciano')

        customer.deactivate()

        expect(customer.isActive()).toBe(false)
    })

    it('Should reward points to customer', () => {
        const customer = new Customer('1', 'Luciano')

        expect(customer.rewardPoints).toBe(0)

        customer.earnPoints(10)
        expect(customer.rewardPoints).toBe(10)

        customer.earnPoints(10)
        expect(customer.rewardPoints).toBe(20)

        customer.earnPoints(5)
        expect(customer.rewardPoints).toBe(25)
    })

})

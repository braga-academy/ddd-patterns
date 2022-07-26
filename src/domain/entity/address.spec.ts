import Address from './address'

describe('Address unit tests', () => {
    it('Shoud return address as string', () => {
        const address = new Address('Rua teste', 10, '10123-201', 'Sobral')

        expect(address.toString()).toBe('Rua teste, 10, 10123-201, Sobral')
    })

    it('Should throw error when street is empty', () => {
        expect(() => {
            const address = new Address('', 10, '10123-201', 'Sobral')
        }).toThrowError('Street is required')
    })

    it('Should throw error when Number is empty', () => {
        expect(() => {
            const address = new Address('Rua teste', 0, '10123-201', 'Sobral')
        }).toThrowError('Number is required')
    })

    it('Should throw error when Zip is empty', () => {
        expect(() => {
            const address = new Address('Rua teste', 10, '', 'Sobral')
        }).toThrowError('Zip is required')
    })

    it('Should throw error when City is empty', () => {
        expect(() => {
            const address = new Address('Rua teste', 10, '10123-201', '')
        }).toThrowError('City is required')
    })
})

export default class OrderItem {
    private _id: string
    private _productId: string
    private _quantity: number
    private _name: string
    private _price: number

    constructor(id: string, productId: string, quantity: number, name: string, price: number) {
        this._id = id
        this._productId = productId
        this._quantity = quantity
        this._name = name
        this._price = price
        this.validate()
    }

    validate(): boolean {
        if(this._quantity <= 0) {
            throw new Error('Quantity must be greater than zero')
        }
        return true
    }

    public get price() : number {
        return this._price * this._quantity
    }

}

import Address from './address'

export default class Customer {
    private _id: string
    private _name: string
    private _address!: Address
    private _active: boolean = false
    private _rewardPoints: number = 0

    constructor (id: string, name: string) {
        this._id = id
        this._name = name
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required")
        }
        if(this._name.length === 0) {
            throw new Error("Name is required")
        }
    }

    changeName (name: string) {
        this._name = name
        this.validate()
    }

    activate () {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer")
        }
        this._active = true
    }

    deactivate () {
        this._active = false
    }

    isActive (): boolean {
        return this._active
    }

    earnPoints(points: number) {
        this._rewardPoints += points
    }

    public get rewardPoints() : number {
        return this._rewardPoints
    }


    set Address(address: Address) {
        this._address = address
    }

    public get name() : string {
        return this._name
    }

    public get id() : string {
        return this._id
    }


}

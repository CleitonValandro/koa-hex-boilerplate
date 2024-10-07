export class BaseEntity {
    id: number

    constructor(data: any) {
        this.id = data.id
    }

    getId() {
        return this.id
    }
}
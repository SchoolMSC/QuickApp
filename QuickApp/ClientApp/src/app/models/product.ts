import { Time } from '@angular/common'

export class Product
{
    Id:number
    Name:string
    Description:string
    Icon:string
    BuyingPrice:number
    SellingPrice:number
    UnitsInStock:boolean
    IsActive:boolean
    IsDiscontinued:boolean
    DateCreated:Time
    DateModified:Time
}
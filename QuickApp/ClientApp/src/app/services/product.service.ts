import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private httpClient:HttpClient) { }

path="https://localhost:5001/api/";


getProducts():Observable<Product[]>
{
  return this.httpClient.get<Product[]>(this.path+"urun");
}

getProductById(id):Observable<Product>
{
  return this.httpClient.get<Product>(this.path+"product/"+id);
}

add (product)
{
  return this.httpClient.post(this.path + "product/add", product).subscribe();
}

delete(id):Observable<Product>
{
  return this.httpClient.delete<Product>(this.path + "product/"+ id);
}

update(product,id):Observable<Product>
{
  return this.httpClient.put<Product>(this.path + "urun/update/"+id, product);
}
}

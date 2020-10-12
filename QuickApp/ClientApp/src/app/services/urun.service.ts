import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urun } from '../models/urun';

@Injectable({
  providedIn: 'root'
})
export class UrunService {

constructor(private httpClient:HttpClient) { }
path="https://localhost:5001/api/";



getUrunler():Observable<Urun[]>
{
  return this.httpClient.get<Urun[]>(this.path+"urun");
}

getUrunById(id):Observable<Urun>
{
  return this.httpClient.get<Urun>(this.path+"urun/"+id);
}

add (urun)
{
  return this.httpClient.post(this.path + "urun/add", urun).subscribe();
}

delete(id):Observable<Urun>
{
  return this.httpClient.delete<Urun>(this.path + "urun/"+ id);
}

update(urun,id):Observable<Urun>
{
  return this.httpClient.put<Urun>(this.path + "urun/update/"+id, urun);
}
}

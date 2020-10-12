// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { Urun } from 'src/app/models/urun';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [fadeInOut]
})
export class OrdersComponent {

  constructor(private http:HttpClient) { }

  urunler:Urun[]=[];
  ngOnInit() {
    
    this.getUrunler().subscribe(data => this.urunler = data);

  }

  getUrunler()
  {
    return this.http.get<Urun[]>("https://localhost:5001/api/urun")
    .pipe(map(res => res))
  }
}

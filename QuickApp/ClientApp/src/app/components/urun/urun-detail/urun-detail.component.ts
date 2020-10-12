import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrunService } from 'src/app/services/urun.service';
import { Urun } from 'src/app/models/urun';

@Component({
  selector: 'app-urun-detail',
  templateUrl: './urun-detail.component.html',
  styleUrls: ['./urun-detail.component.scss'],
  providers:[UrunService]
})
export class UrunDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private urunService:UrunService) { }

  urun:Urun;
  
  ngOnInit() {
    debugger;
    this.activatedRoute.params.subscribe(params => {this.getUrunById(params["urunId"])} )
  }

  getUrunById(urunId){
    debugger;
    this.urunService.getUrunById(urunId).subscribe(data => {this.urun = data;})
  }
  
}

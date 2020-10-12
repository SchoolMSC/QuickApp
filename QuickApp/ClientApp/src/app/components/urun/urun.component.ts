import { fadeInOut } from '../../services/animations';
import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/app/models/urun';
import { UrunService } from 'src/app/services/urun.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.scss'],
  animations: [fadeInOut],
  providers:[UrunService],
})
export class UrunComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private urunService:UrunService) { }

  debuger;
  urunler:Urun[]=[];
  urun:Urun;
  
  ngOnInit() {
    this.urunService.getUrunler().subscribe(data => {this.urunler = data});    
  }

  delete(urunId){
    this.urunService.delete(urunId).subscribe(data => {this.urun = data;})
  }

  reload()
  {
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Urun } from 'src/app/models/urun';
import { UrunService } from 'src/app/services/urun.service';

@Component({
  selector: 'app-urun-update',
  templateUrl: './urun-update.component.html',
  styleUrls: ['./urun-update.component.scss'],
  providers:[UrunService]
})
export class UrunUpdateComponent implements OnInit {
  
  yeniUrunId:any;
  productData:any;

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private urunService:UrunService,  private router: Router) { }
  
  urun:Urun;
  urunAddForm:FormGroup;
  
  ngOnInit() {
    debugger;
    this.createUrunForm();
    this.activatedRoute.params.subscribe(params => {this.update(params["urunId"])} )
    this.activatedRoute.params.subscribe(params => {this.getUrunById(params["urunId"])} )
  }

  getUrunById(urunId){
    debugger;
    this.urunService.getUrunById(urunId).subscribe(data => {
      this.urun = data;
    })
  }

  createUrunForm()
  {
    debugger;
    this.urunAddForm =  this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      image:["",Validators.required],
      price:[,Validators.required],
    })
  }

  update(urunId){
    debugger;
    if(this.urunAddForm.valid)
    { 
      this.urun = Object.assign({},this.urunAddForm.value)
    }
    this.urunService.update(this.urun, urunId);
  }

}

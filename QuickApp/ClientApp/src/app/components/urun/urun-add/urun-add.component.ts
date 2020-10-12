import { Component, OnInit } from '@angular/core';
import { UrunService } from 'src/app/services/urun.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Urun } from 'src/app/models/urun';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urun-add',
  templateUrl: './urun-add.component.html',
  styleUrls: ['./urun-add.component.scss'],
  providers: [UrunService],
})
export class UrunAddComponent implements OnInit {

  constructor(private urunService:UrunService, private formBuilder:FormBuilder, private router: Router) {}

  urun:Urun;
  urunAddForm:FormGroup;

  ngOnInit( ) {
    this.createUrunForm();
  }

  createUrunForm()
  {
    this.urunAddForm =  this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      image:["",Validators.required],
      price:[,Validators.required],
    })
  }
  
  add()
  {
    if(this.urunAddForm.valid)
    { 
      this.urun = Object.assign({},this.urunAddForm.value)
      this.urunService.add(this.urun);

      this.router.navigate(['/urun']);

      alert("Ürün eklendi!");
    }
  }


}

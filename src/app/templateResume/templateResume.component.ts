import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {TemplateService} from '../templateResume/template.service';
import * as moment from 'moment';



@Component({
  selector: 'app-templateResume',
  templateUrl: './templateResume.component.html',
  styleUrls: ['./templateResume.component.css'],
  providers:[TemplateService]
})
export class TemplateResumeComponent implements OnInit {
  id:number;
  constructor(private router:Router,private templateService:TemplateService) { 
    
  }

  ngOnInit() {
  }

   one()
  {
    console.log('first image clicked');   
    this.router.navigate(['/formdata']);
  }

  search(id)
  {
    this.templateService.getproducts(id).subscribe(data=>{
      console.log(data);
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Formdata } from '../../app/formdata/formdata';
import { Experience } from '../../app/formdata/experience';
import { Publications } from '../../app/formdata/publications';
import { Skills } from '../../app/formdata/skills';
import { Education } from '../../app/formdata/education';
import { School } from '../../app/formdata/school';
import { College } from '../../app/formdata/college';
import { Honors } from '../../app/formdata/honors';
import { Contacts } from '../../app/formdata/contacts';
import { FormdataService } from '../../app/formdata/formdata.service';
import { NgForm } from '@angular/forms';
import { DomainData } from '../../app/formdata/DomainData';
import { ResumeComponent } from "./resume/resume.component";

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css'],
  providers: [FormdataService]
})
export class FormdataComponent implements OnInit {
  public formdata: Formdata = new Formdata();
  public experience: Experience = new Experience();
  public publications: Publications = new Publications();
  public skills: Skills = new Skills();
  public education: Education = new Education();
  public school: School = new School();
  public college: College = new College();
  public contacts: Contacts = new Contacts();
  public honors: Honors = new Honors();
  public domaindata: DomainData = new DomainData();
  tableshow = false;
  publicshow = false;
  skillshow = false;
  tenshow = false;
  tweshow = false;
  colshow = false;

  constructor(private formdataService:FormdataService) {

  
  }

  ngOnInit() {


  }

  onSubmit(val) {
    console.log(val);
  }


  exparray = [];
  pubarray = [];
  skillarray = [];
  tenarray = [];
  twearray = [];
  colarray = [];


  experi(experience) {
    this.tableshow = true;
    this.exparray.push(experience);
    console.log(this.exparray);
    this.domaindata.experience = this.exparray;
    console.log(this.domaindata);
    this.experience=new Experience();
  }

  publication(publications) {
    this.publicshow = true;
    this.pubarray.push(publications);
    this.domaindata.publications = this.pubarray;
    console.log(this.domaindata);   
    this.publications=new Publications(); 
  }

  skilldata(skills) {
    this.skillshow = true;
    this.skillarray.push(skills);
    this.domaindata.skills = this.skillarray;
    console.log(this.domaindata);    
    this.skills=new Skills();
  }

  ten(school) {
    console.log(school);
    this.tenshow = true;
    this.tenarray.push(school); 
    console.log(this.tenarray);
    this.education = new Education();
    this.school = new School();
    this.college = new College();
  }
  twe(val, co) {
    this.tenshow = true;
    val.course = co;
    this.tenarray.push(val);
    this.domaindata.school = this.tenarray;
    console.log(this.domaindata.school);
    console.log(this.tenarray);
    this.education = new Education();
    this.school = new School();
    this.college = new College();
  }

  data: object;
  jsonvalue;
  cond = false;
  temp=[];
  demo;
  sub(contacts, honors, formdata) {
    this.cond = true;
    this.domaindata.honors = honors;
    this.domaindata.contacts = contacts;
    this.domaindata.formdata = formdata;                        
    this.jsonvalue =this.domaindata;
    console.log(JSON.stringify(this.jsonvalue));
    this.temp.push(JSON.stringify(this.jsonvalue));
    this.formdataService.postMethod(this.jsonvalue).subscribe(data=>{
      console.log('success');      
      console.log(data);      
    });
    this.demo={
      'resume':this.temp
    };
    console.log(this.demo);    
    console.log(this.temp);    
    console.log(this.jsonvalue);    
    this.contacts = new Contacts();
    this.honors = new Honors();
    this.formdata = new Formdata();
    this.experience=new Experience();    
  }
}

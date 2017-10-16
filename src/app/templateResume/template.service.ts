import { Injectable } from '@angular/core';
import {Http, Response, Headers} from'@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import {Formdata} from '../../app/formdata/formdata';

@Injectable()
export class TemplateService {
headers = new Headers({ 'Content-Type': 'application/json' });
 private _producturl = 'http://localhost:3000/resume';
constructor(private _http: Http) { }

//using get method
  getproducts(id): Observable<Formdata[]> {
    return this._http.get(this._producturl+"/"+id, {
      headers: this.headers
    })
      .map((response: Response) => {
        let data = response.json();
        console.log("formdata service");
        console.log(data);        
        return data;
      }
      )
  }

}
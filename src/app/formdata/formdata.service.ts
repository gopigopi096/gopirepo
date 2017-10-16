import { Injectable } from '@angular/core';
import {Http, Response, Headers} from'@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import {Formdata} from '../../app/formdata/formdata';
@Injectable()
export class FormdataService {
 headers = new Headers({ 'Content-Type': 'application/json' });
 private _producturl = 'http://localhost:3004/resume';
constructor(private _http: Http) 
{

}

//using get method
  getproducts(): Observable<Formdata[]> {
    return this._http.get(this._producturl, {
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
    
 //using post method
  postMethod(body: Object) {
    console.log("post define inside");
    console.log(body);
    return this._http.post(this._producturl, body, {
      headers: this.headers
    })
      .map((res: Response) => { return res.json() });
  }
     
}
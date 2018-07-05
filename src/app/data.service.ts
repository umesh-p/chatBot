import { Injectable, Inject } from '@angular/core';
import { Http, Headers , RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {


	httpOptions: { headers: any; };
  httpEndpoint = 'https://api.dialogflow.com/v1/query?v=20150910';

  constructor(private http: Http) {
  }


  post(dataText) {

    var textData =  {
                    "lang": "en",
                    "query": dataText,
                    "sessionId": "12345",
                    "timezone": "Asia/Almaty"
                  }

    return this.http.post(this.httpEndpoint , JSON.stringify(textData) , this.getHttpOptions(''))
    .map(response => response.json());
  }

  getHttpOptions(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Bearer 90302693ec4a4bd5b40974fbaf4c040d ');
    const options = new RequestOptions({ headers : headers });
    return options;
  }


}

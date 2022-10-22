import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { postMouserResult } from '../configs/api.service.config';
import {postMouserInput} from '../variables/api.service.variables'


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { 
  }

  postKeywordMouser() : Observable<typeof postMouserResult>
  {
    const url = environment.api.baseUrl +
                environment.api.apiUrl +
                environment.api.version +
                environment.api.searchUrl +
                environment.api.keyUrl +
                environment.api.key;
                
    return this.http.post<typeof postMouserResult>(url,postMouserInput);
  }
}
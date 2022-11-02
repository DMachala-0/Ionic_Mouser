import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { postMouserResult } from '../../models/api.service.model';
import { SettingsStorageService } from '../storage/settings-storage.service';

//import {postMouserInput} from '../variables/api.service.variables'


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
    private localSettingStorage: SettingsStorageService) { 
  }

  postKeywordMouser() : Observable<postMouserResult>
  {
    const url = environment.api.baseUrl +
                environment.api.apiUrl +
                environment.api.version +
                environment.api.searchUrl +
                environment.api.keyUrl +
                environment.api.key;
                
    return this.http.post<postMouserResult>(url,this.localSettingStorage.postMouserInput); //mouserinput
  }
}
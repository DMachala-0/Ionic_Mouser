import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { postMouserResult } from 'src/app/models/api.service.model';
import { SettingsStorageService } from './settings-storage.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageStorageService {

  constructor(
    private localStorage: StorageService,
    private localSettingsStorage: SettingsStorageService
    ) {this.initMainPage();}


    private privateMainPageResult = new ReplaySubject<postMouserResult>(1);
    private privateMainPageUrl = new ReplaySubject<string>(1);

    async initMainPage()
    {
      //get value
      
      let value = await this.localStorage.getData("MouserDataResult");
      if (!value) {
        console.log("NULL ");
        value = "help";
      }
      this.privateMainPageResult.next(value);
    
      value = await this.localStorage.getData("MouserDataUrl");
      if (!value) {
        value = "";
      }
      this.privateMainPageUrl.next(value);

    }

    setMainPageUrl(value: string)
    {
      this.localStorage.setData("MouserDataUrl",value);
    }

    setMainPageResult(value: postMouserResult)
    {
      console.log(value);
      this.localStorage.setData("MouserDataResult",value);
    }

    get getMainPageResult$() {
      return this.privateMainPageResult.asObservable();
    }

    get getMainPageUrl$() {
      return this.privateMainPageUrl.asObservable();
    }

}

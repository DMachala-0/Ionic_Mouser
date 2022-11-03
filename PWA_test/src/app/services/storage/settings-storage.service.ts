import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class SettingsStorageService {

  recordEndDefault = 50;
  recordStartDefault = 1;

  public searchOptions: string[] = ["None", "Rohs", "InStock", "RohsAndInStock"];

  public postMouserInput =
    {
      "SearchByKeywordRequest":
      {
        "keyword": "string",
        "records": this.recordEndDefault,
        "startingRecord": this.recordStartDefault,
        "searchOptions": this.searchOptions[0],
        "searchWithYourSignUpLanguage": "true"
      }
    };


  constructor(private localStorage: StorageService) {
    this.initSettings(0, 50, 3);
  }

  private privateServiceSubjectStart = new ReplaySubject<number>(1);
  private privateServiceSubjectEnd = new ReplaySubject<number>(1);

  private privateServiceSubjectSelect = new ReplaySubject<string>(1);

  async initSettings(start: number, end: number, select: number) {
    //this.setSettingsValueStart(start);
    //this.setSettingsValueEnd(end);
   // this.setSettingsValueSelect(select);
    let value = await this.localStorage.getData("MouserSettingsValueStart");
    if (!value) {
      value = this.postMouserInput.SearchByKeywordRequest.startingRecord;
    }

    this.privateServiceSubjectStart.next(value);

    value = await this.localStorage.getData("MouserSettingsValueEnd");
    if (!value) {
      value = this.postMouserInput.SearchByKeywordRequest.records;
    }

    this.privateServiceSubjectEnd.next(value);

    value = await this.localStorage.getData("MouserSettingsValueSelect");
    if (!value) {
      value = this.postMouserInput.SearchByKeywordRequest.searchOptions;
    }

    this.privateServiceSubjectSelect.next(value);


  }


  setSettingsValueStart(value: number) {
    this.localStorage.setData("MouserSettingsValueStart", value);
    this.postMouserInput.SearchByKeywordRequest.startingRecord = value;
    this.privateServiceSubjectStart.next(value);

  }
  setSettingsValueEnd(value: number) {
    this.localStorage.setData("MouserSettingsValueEnd", value);
    this.postMouserInput.SearchByKeywordRequest.records = value;
    this.privateServiceSubjectEnd.next(value);
  }

  setSettingsValueSelect(value: number) {
    this.localStorage.setData("MouserSettingsValueSelect", value);
    this.postMouserInput.SearchByKeywordRequest.searchOptions = this.searchOptions[value];
    this.privateServiceSubjectSelect.next(this.searchOptions[value]);
  }


  get getSettingsValueStart$() {
    return this.privateServiceSubjectStart.asObservable();
  }

  get getSettingsValueEnd$() {
    return this.privateServiceSubjectEnd.asObservable();
  }

  get getSettingsValueOption$() {
    return this.privateServiceSubjectSelect.asObservable();
  }
}

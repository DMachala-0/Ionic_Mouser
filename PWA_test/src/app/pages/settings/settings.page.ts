import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController} from '@ionic/angular';
import { SettingsStorageService } from 'src/app/services/storage/settings-storage.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Tab1Page } from 'src/app/tab1/tab1.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  form: FormGroup;
  
  public changeStartItemValue: number = 0;
  public changeSearchCountValue: number = 0;
  public searchOptions: string = "";
  public selectOption = this.localSettingsStorage.searchOptions;
  public selectOptionVal: number;
  public indexOfSelectOption: number = 0;

  //component = PartinfoPage;

  constructor(
    private modalCtrl: ModalController,
    private localSettingsStorage: SettingsStorageService,
    private apiService: ApiService,
    private tab1: Tab1Page
    ) 
  {

    this.localSettingsStorage.getSettingsValueEnd$.subscribe(value =>
      {
        this.setSearchCountValue = value;
        console.log("setSearchCountValue:" + value);
      });
      
      this.localSettingsStorage.getSettingsValueStart$.subscribe(value =>
      {
        this.setStartItemValue = value;
        console.log("setStartItemValue:" + value);
      });
  
      this.localSettingsStorage.getSettingsValueOption$.subscribe(value =>
      {
        this.setSearchOptions = value;
        console.log("setSearchOptions:" + value);
      });
    //
  }

  set setStartItemValue(value:number)
  {
    this.changeStartItemValue = value;
    console.log("ss:"+this.changeStartItemValue);
  }

  set setSearchCountValue(value:number)
  {
    this.changeSearchCountValue = value;
    console.log("ss:"+this.changeSearchCountValue);
  }

  set setSearchOptions(value:string)
  {
    this.searchOptions = value;
    console.log("setter Search options");
    this.findSearchOptionIndex();
  }

  findSearchOptionIndex()
  {
    let tmpVar = 0;
    console.log("findSearchOptionIndex");
    console.log("Search Options:" + this.searchOptions);
    this.localSettingsStorage.searchOptions.forEach(element => {
      console.log("element:"+element);
      
    if(element == this.searchOptions)
      {
        this.indexOfSelectOption = tmpVar;
        console.log("found:" + this.indexOfSelectOption);
        this.localSettingsStorage.postMouserInput.SearchByKeywordRequest.searchOptions = element;
      }
      tmpVar++
    });
  }



 ngOnInit(){}

  changeStartItem(startCount: number)
  {
    //console.log("click");
    console.log(startCount);
    this.localSettingsStorage.setSettingsValueStart(startCount);
  }

  changeSearchCount(searchCount: number) 
  { 
    this.localSettingsStorage.setSettingsValueEnd(searchCount);

  }

  changeSelectOptions(sel: number)
  {
    this.localSettingsStorage.setSettingsValueSelect(sel);
  }



  settingsClose()
  {
    //console.log("output");
    console.log(this.localSettingsStorage.postMouserInput.SearchByKeywordRequest);
    //this.tab1.postMouser();
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

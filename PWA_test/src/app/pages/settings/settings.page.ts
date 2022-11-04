import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, SelectValueAccessor } from '@ionic/angular';
import { PartinfoPage } from '../partinfo/partinfo.page';
import { StorageService } from '../../services/storage/storage.service';
import { Observable, ReplaySubject } from 'rxjs';
import { SettingsStorageService } from 'src/app/services/storage/settings-storage.service';

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
    private formBuilder: FormBuilder,
    private localStorage: StorageService,
    private localSettingsStorage: SettingsStorageService
    ) 
  {

    this.localSettingsStorage.getSettingsValueEnd$.subscribe(value =>
      {
        this.setSearchCountValue = value;
      });
      
      this.localSettingsStorage.getSettingsValueStart$.subscribe(value =>
      {
        this.setStartItemValue = value;
      });
  
      this.localSettingsStorage.getSettingsValueOption$.subscribe(value =>
      {
        this.setSearchOptions = value;
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
    this.findSearchOptionIndex();
  }

  findSearchOptionIndex()
  {
    let tmpVar = 0;
    this.localSettingsStorage.searchOptions.forEach(element => {
    if(element == this.searchOptions)
      {
        this.indexOfSelectOption = tmpVar;
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
    console.log(this.localSettingsStorage.postMouserInput.SearchByKeywordRequest);

    this.modalCtrl.dismiss();
  }
}

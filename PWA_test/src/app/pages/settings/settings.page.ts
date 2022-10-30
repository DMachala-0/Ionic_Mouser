import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { postMouserInput, searchOptions } from 'src/app/variables/api.service.variables';
import { PartinfoPage } from '../partinfo/partinfo.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  form: FormGroup;
  changeStartItemValue: number;
  changeSearchCountValue: number;
  searchOptions = searchOptions;
  selectOption: number;
  indexOfSelectOption = 0;

  component = PartinfoPage;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
    ) 
  {
    
  }

  ngOnInit() {
    //set input
    this.changeStartItemValue = postMouserInput.SearchByKeywordRequest.startingRecord;
    this.changeSearchCountValue = postMouserInput.SearchByKeywordRequest.records;

    let tmpVar = 0;
    searchOptions.forEach(element => {
    if(element == postMouserInput.SearchByKeywordRequest.searchOptions)
      {
        
        console.log("index found");
        console.log(element);
        this.indexOfSelectOption = tmpVar;
      }
      tmpVar++
    });
  }

  changeStartItem(startCount: number)
  {
    postMouserInput.SearchByKeywordRequest.startingRecord = startCount;  
    console.log("click");
    console.log(startCount);
  }

  changeSearchCount(searchCount: number) 
  {
    postMouserInput.SearchByKeywordRequest.records = searchCount;  
    console.log("click");
    console.log(searchCount);
  }

  changeSelectOptions(selectOption: number)
  {
    console.log(selectOption);
    console.log(searchOptions[selectOption]);
    postMouserInput.SearchByKeywordRequest.searchOptions = searchOptions[selectOption];
    console.log(postMouserInput.SearchByKeywordRequest.searchOptions);
  }
  settingsClose()
  {
    this.modalCtrl.dismiss();
  }
}

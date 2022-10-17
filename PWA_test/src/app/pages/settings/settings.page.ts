import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { postMouserInput } from 'src/app/variables/api.service.variables';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  form: FormGroup;
  value: number;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
    ) 
  {
    
  }

  ngOnInit() {
    //set input
    this.value = postMouserInput.SearchByKeywordRequest.records;
  }

  changeSearchCount(serchCount: number) 
  {
    postMouserInput.SearchByKeywordRequest.records = serchCount;  
    console.log("click");
    console.log(serchCount);
  }

  settingsClose()
  {
    this.modalCtrl.dismiss();
  }
}

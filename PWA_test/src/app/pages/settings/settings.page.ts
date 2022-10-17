import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
    ) 
  {

  }

  ngOnInit() {
  }


  settingsClose()
  {
    this.modalCtrl.dismiss();
  }
}

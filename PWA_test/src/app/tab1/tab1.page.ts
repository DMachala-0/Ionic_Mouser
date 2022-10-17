import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SettingsPage } from '../pages/settings/settings.page';
import { ApiService } from '../services/api.service';
import { postMouserResult } from '../configs/api.service.config';
import { postMouserInput } from '../variables/api.service.variables';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  postMouserResult$: Observable<postMouserResult>;
  searchInput$: string;

  
  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController,
    )
  {
  }

  logs()
  {
    console.log(this.searchInput$);
  }
  postM()
  {
    postMouserInput.SearchByKeywordRequest.keyword = this.searchInput$ ?? '';//this.todo.value;
    postMouserInput.SearchByKeywordRequest.records = 5;
    postMouserInput.SearchByKeywordRequest.startingRecord = 0;
    this.postMouserResult$ =  this.apiService.postKeywordMouser();
  }

  openSettings()
  {
    console.log("settings clicked")
    this.openModal();
  }

  async openModal()
  {
    console.log("modal clicked")
    const modal = await this.modalCtrl.create(
      {
        component: SettingsPage
      }
    );
    await modal.present();
  }

}

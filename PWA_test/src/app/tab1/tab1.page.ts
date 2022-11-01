import { Component, ViewChild } from '@angular/core';
import { IonTabs, ModalController, NavController } from '@ionic/angular';
import { identity, Observable } from 'rxjs';
import { SettingsPage } from '../pages/settings/settings.page';
import { ApiService } from '../services/api.service';
import { postMouserResult } from '../models/api.service.model';
import { PartDetail} from '../variables/partdetail.variables';
import { postMouserInput } from '../variables/api.service.variables';
import { PartinfoPage } from '../pages/partinfo/partinfo.page';
import { TabsPage } from '../tabs/tabs.page';
import { testnumber } from '../variables/global.html.variables';
import { GlobalBrowser } from 'src/app/functions/global.browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postMouserResult$: Observable<postMouserResult>;
  searchInput$: string;
  ttn=  testnumber;
  component = PartinfoPage;

  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private other: TabsPage,
    private partDetail: PartDetail,
    private globalBrowser: GlobalBrowser
    )
  {
  }

  logs()
  {
    console.log(this.searchInput$);
  }
  async postMouser()
  {
    postMouserInput.SearchByKeywordRequest.keyword = this.searchInput$ ?? '';//this.todo.value;
    this.postMouserResult$ = await this.apiService.postKeywordMouser();
  }


  openSettings()
  {
    this.openModal();
  }

  openInfoPage(value: any)
  { 
    console.log(value);
    this.partDetail.Part = value;
  }

  openURL(url: string)
  {
    this.globalBrowser.openURL(url);
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

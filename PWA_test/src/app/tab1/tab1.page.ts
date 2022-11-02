import { Component, ViewChild } from '@angular/core';
import { IonTabs, ModalController, NavController } from '@ionic/angular';
import { identity, Observable } from 'rxjs';
import { SettingsPage } from '../pages/settings/settings.page';
import { ApiService } from '../services/api/api.service';
import { postMouserResult } from '../models/api.service.model';
import { PartDetail } from '../variables/partdetail.variables';
import { PartinfoPage } from '../pages/partinfo/partinfo.page';
import { TabsPage } from '../tabs/tabs.page';
import { testnumber } from '../variables/global.html.variables';
import { GlobalBrowser } from 'src/app/functions/global.browser';
import { StorageService } from '../services/storage/storage.service';
import { SettingsStorageService } from '../services/storage/settings-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postMouserResult$: Observable<postMouserResult>;
  searchInput$: string;
  ttn = testnumber;
  component = PartinfoPage;

  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private other: TabsPage,
    private partDetail: PartDetail,
    private globalBrowser: GlobalBrowser,
    private localStorage: StorageService,
    private localSettingsStorage: SettingsStorageService
  ) {
  }
  ngOnInit() {
    //get stored data
    //this.postMouserResult$ = this.localStorage.getData("MouserData");
  }

  logs() {
    console.log(this.searchInput$);
  }
  async postMouser() {
    this.localSettingsStorage.postMouserInput.SearchByKeywordRequest.keyword = this.searchInput$ ?? 'IC';//this.todo.value;
    console.log(this.localSettingsStorage.postMouserInput.SearchByKeywordRequest.keyword);
    this.postMouserResult$ = await this.apiService.postKeywordMouser();

    this.localStorage.setData("MouserData", this.postMouserResult$);
  }


  openSettings() {
    this.openModal();
  }

  openInfoPage(value: any) {
    console.log(value);
    this.partDetail.Part = value;
  }

  openURL(url: string) {
    this.globalBrowser.openURL(url);
  }

  async openModal() {
    console.log("modal clicked")
    const modal = await this.modalCtrl.create(
      {
        component: SettingsPage
      }
    );
    await modal.present();
  }

}

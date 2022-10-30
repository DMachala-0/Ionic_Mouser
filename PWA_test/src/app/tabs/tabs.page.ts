import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { tabInfoShow } from '../variables/global.html.variables';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  show : boolean;
  @ViewChild('tabs', { static: false }) tabs: IonTabs;



  constructor() {
    this.show = tabInfoShow;
  }

/**
 * selectTab
name: string */
public selectTab(name: string) {
  this.tabs.select(name);
}

public availibilityTab(value: boolean)
{
  this.show = value;
}

/*
  setCurrentTab(ev: any){
    console.log("sds");
    console.log(ev);
    this.tabs.select("tab1");
  }*/

}

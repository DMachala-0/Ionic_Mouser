import { Component, OnInit } from '@angular/core';
import { PartDetail} from '../../variables/partdetail.variables';
import { GlobalBrowser } from 'src/app/functions/global.browser';

@Component({
  selector: 'app-partinfo',
  templateUrl: './partinfo.page.html',
  styleUrls: ['./partinfo.page.scss'],
})
export class PartinfoPage implements OnInit {
    itemDetail: PartDetail["Part"];
  constructor(
    private partDetail: PartDetail,
    private globalBrowser: GlobalBrowser)
     { }

  ngOnInit() {
    this.itemDetail = this.partDetail.Part;
    console.log(this.itemDetail);
  }
  openURL(url: string)
  {
    this.globalBrowser.openURL(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { PartDetail } from 'src/app/configs/api.service.config';


@Component({
  selector: 'app-partinfo',
  templateUrl: './partinfo.page.html',
  styleUrls: ['./partinfo.page.scss'],
})
export class PartinfoPage implements OnInit {
    itemDetail: PartDetail["Part"];
  constructor(private partDetail: PartDetail) { }

  ngOnInit() {
    this.itemDetail = this.partDetail.Part;
    console.log(this.itemDetail);
  }

}

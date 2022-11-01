import { Browser } from '@capacitor/browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalBrowser
{
  async openURL(url: string)
  {
    console.log(url);
    await Browser.open({url});
  }
}



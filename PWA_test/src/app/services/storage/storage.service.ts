import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async removeValue(key: string)
  {
   await Preferences.remove({key});
  }

  async getData(key: string): Promise<any>
  {
   const {value} = await Preferences.get( {key} );
   if(value != null)
   {
      return JSON.parse(value);
   }

  }

  async setData(key:string, data: any)
  {
     await Preferences.set({
       key,
       value: JSON.stringify(data),
     });
  }
}

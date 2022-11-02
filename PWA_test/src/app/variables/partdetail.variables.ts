import { Injectable } from "@angular/core"
import { ReplaySubject } from "rxjs";
import { StorageService } from "../services/storage/storage.service";


@Injectable({
  providedIn: 'root'
})

export class PartDetail{

public Part =
{
"Availability": "N/A",
"DataSheetUrl": "N/A",
"Description": "N/A",
"FactoryStock": "N/A",
"ImagePath": "N/A",
"Category": "N/A",
"LeadTime": "N/A",
"LifecycleStatus": "N/A",
"Manufacturer": "N/A",
"ManufacturerPartNumber": "N/A",
"Min": "N/A",
"Mult": "N/A",
"MouserPartNumber": "N/A",
"ProductAttributes": [
  {
    "AttributeName": "N/A",
    "AttributeValue": "N/A"
  }
],
"PriceBreaks": [
  {
    "Quantity": 0,
    "Price": "N/A",
    "Currency": "N/A"
  }
],
"AlternatePackagings": [
  {
    "APMfrPN": "N/A"
  }
],
"ProductDetailUrl": "N/A",
"Reeling": true,
"ROHSStatus": "N/A",
"SuggestedReplacement": "N/A",
"MultiSimBlue": 0,
"UnitWeightKg": {
  "UnitWeight": 0
},
"StandardCost": {
  "Standardcost": 0
},
"IsDiscontinued": "N/A",
"RTM": "N/A",
"MouserProductCategory": "N/A",
"IPCCode": "N/A",
"SField": "N/A",
"VNum": "N/A",
"ActualMfrName": "N/A",
"AvailableOnOrder": "N/A",
"InfoMessages": [
  "N/A"
],
"SalesMaximumOrderQty": "N/A",
"RestrictionMessage": "N/A",
"PID": "N/A",
"ProductCompliance": [
  {
    "ComplianceName": "N/A",
    "ComplianceValue": "N/A"
  }
]
}
/*
constructor(private storageService: StorageService) {
  this.init();
}

private privateServiceSubject = new ReplaySubject<Part>(1);

async init(){
  let part = await this.storageService.getData("MouserPart");
  if(!part)
  {
  this.Part = this.Part;
  }
  this.privateServiceSubject.next(part);
}

get part$(){
  return this.privateServiceSubject.asObservable();
}*/

}
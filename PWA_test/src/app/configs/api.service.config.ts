import { Injectable } from "@angular/core"

export interface postMouserResult
{
    "Errors": [
      {
        "Id": 0,
        "Code": "string",
        "Message": "string",
        "ResourceKey": "string",
        "ResourceFormatString": "string",
        "ResourceFormatString2": "string",
        "PropertyName": "string"
      }
    ],
    "SearchResults": {
      "NumberOfResult": 0,
      "Parts": [
        {
          "Availability": "string",
          "DataSheetUrl": "string",
          "Description": "string",
          "FactoryStock": "string",
          "ImagePath": "string",
          "Category": "string",
          "LeadTime": "string",
          "LifecycleStatus": "string",
          "Manufacturer": "string",
          "ManufacturerPartNumber": "string",
          "Min": "string",
          "Mult": "string",
          "MouserPartNumber": "string",
          "ProductAttributes": [
            {
              "AttributeName": "string",
              "AttributeValue": "string"
            }
          ],
          "PriceBreaks": [
            {
              "Quantity": 0,
              "Price": "string",
              "Currency": "string"
            }
          ],
          "AlternatePackagings": [
            {
              "APMfrPN": "string"
            }
          ],
          "ProductDetailUrl": "string",
          "Reeling": true,
          "ROHSStatus": "string",
          "SuggestedReplacement": "string",
          "MultiSimBlue": 0,
          "UnitWeightKg": {
            "UnitWeight": 0
          },
          "StandardCost": {
            "Standardcost": 0
          },
          "IsDiscontinued": "string",
          "RTM": "string",
          "MouserProductCategory": "string",
          "IPCCode": "string",
          "SField": "string",
          "VNum": "string",
          "ActualMfrName": "string",
          "AvailableOnOrder": "string",
          "InfoMessages": [
            "string"
          ],
          "SalesMaximumOrderQty": "string",
          "RestrictionMessage": "string",
          "PID": "string",
          "ProductCompliance": [
            {
              "ComplianceName": "string",
              "ComplianceValue": "string"
            }
          ]
        }
      ]
    }
  }


  @Injectable({
    providedIn: 'root'
  })
  
export class PartDetail{
  public Part =
  {
  "Availability": "string",
  "DataSheetUrl": "string",
  "Description": "string",
  "FactoryStock": "string",
  "ImagePath": "string",
  "Category": "string",
  "LeadTime": "string",
  "LifecycleStatus": "string",
  "Manufacturer": "string",
  "ManufacturerPartNumber": "string",
  "Min": "string",
  "Mult": "string",
  "MouserPartNumber": "string",
  "ProductAttributes": [
    {
      "AttributeName": "string",
      "AttributeValue": "string"
    }
  ],
  "PriceBreaks": [
    {
      "Quantity": 0,
      "Price": "string",
      "Currency": "string"
    }
  ],
  "AlternatePackagings": [
    {
      "APMfrPN": "string"
    }
  ],
  "ProductDetailUrl": "string",
  "Reeling": true,
  "ROHSStatus": "string",
  "SuggestedReplacement": "string",
  "MultiSimBlue": 0,
  "UnitWeightKg": {
    "UnitWeight": 0
  },
  "StandardCost": {
    "Standardcost": 0
  },
  "IsDiscontinued": "string",
  "RTM": "string",
  "MouserProductCategory": "string",
  "IPCCode": "string",
  "SField": "string",
  "VNum": "string",
  "ActualMfrName": "string",
  "AvailableOnOrder": "string",
  "InfoMessages": [
    "string"
  ],
  "SalesMaximumOrderQty": "string",
  "RestrictionMessage": "string",
  "PID": "string",
  "ProductCompliance": [
    {
      "ComplianceName": "string",
      "ComplianceValue": "string"
    }
  ]
  }
}
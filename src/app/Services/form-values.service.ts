import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormValuesService {

  constructor() { }
  
  private myArray:any[]=[];
  private editInfo={}

  setData(value:any)
  {
    this.myArray.push(value);
  }

  
  getData()
  {    
    return this.myArray;  
  }

 /* backToForm(info:any)
  {
    this.editInfo=info;
    console.log(this.editInfo);
  }

  getEditInfo()
  {
    return this.editInfo;
  }*/
  
}

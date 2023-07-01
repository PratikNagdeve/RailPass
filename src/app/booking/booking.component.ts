import { Component, OnInit } from '@angular/core';
import { FormValuesService } from '../Services/form-values.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit { 
 

  constructor(private formValue:FormValuesService){ 
    
  }
   

  ngOnInit(): void {
     this.Submit();
     this.Delete;
  }
  
  
  receivedData:any;
  
 Submit()
 {
  this.receivedData=this.formValue.getData();
 }

 Delete(i:any)
 {
   this.receivedData.splice(i,1);
 }

 Edit(i:any)
 {
    const itemToedit=this.receivedData[i];
    this.formValue.backToForm(itemToedit);
 }


}

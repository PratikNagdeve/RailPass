import { Component, OnInit } from '@angular/core';
import { FormValuesService } from '../Services/form-values.service';
import { FormControl,FormGroup} from '@angular/forms';


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
  }

  receivedData:any;
  itemToedit:any;
  index:any;
  
  Submit()
 {
  this.receivedData=this.formValue.getData();
 }

  updateForm=new FormGroup({
    CurrLocation:new FormControl(''),
    Desti:new FormControl(''),
    Depart:new FormControl(''),
    Seat:new FormControl('')
  })

  

 Delete(i:any)
 { 
   this.receivedData.splice(i,1);
 }

 Edit(i:any)
 { this.index=i;
   this.itemToedit=this.receivedData[i];
    console.log("Edit: ",this.itemToedit);
    this.updateForm.patchValue({
      CurrLocation:this.itemToedit.CurrentLocation,
      Desti:this.itemToedit.Destination,
      Depart:this.itemToedit.Departure,
      Seat:this.itemToedit.Seats
    })
    //this.formValue.backToForm(itemToedit);
 }

 updateValue(item:any)
 {
  console.log(item);
  const updateItem={
    CurrentLocation:item.CurrLocation,
    Destination:item.Desti,
    Departure:item.Depart,
    Seats:item.Seat
  }
  this.receivedData[this.index]=updateItem;
  console.log(this.index);
 }


}

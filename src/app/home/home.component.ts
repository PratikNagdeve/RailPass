import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormValuesService } from '../Services/form-values.service';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private formValues:FormValuesService) { }
  editInfo:any;
  ShowME="Book Now"; 

  ngOnInit(): void {
    this.BackToForm();
    this.refillForm();
  }
  
  newForm=new FormGroup(
    {
      CurrentLocation: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]), 
      Destination:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Departure:new FormControl('',[Validators.required,Validators.pattern('[1-9]+$')]),
      Seats:new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern('[1-9]+$')])
    }
    )
    get Location()
    {
       return this.newForm.get('CurrentLocation');
    }

    get destination()
    {
      return this.newForm.get('Destination');
    }

    get departure()
    {
      return this.newForm.get('Departure');
    }

    get seat()
    {
      return this.newForm.get('Seats');
    }

    FormValue(){
      //console.log(this.newForm.value);
    }

    sendData()
    { 
      const data= this.newForm.value;
      this.formValues.setData(data);
      
    }

    BackToForm()
    {
      this.editInfo=this.formValues.getEditInfo();
      console.log("Edit Info: ",this.editInfo);
    }

    refillForm()
    {
      this.newForm.patchValue(this.editInfo);
      if(!this.editInfo)
      {
        this.ShowME="Update"; 
      }
      
    }

}

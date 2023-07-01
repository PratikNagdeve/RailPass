import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { FormValuesService } from './Services/form-values.service';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
    ContactComponent,
    HelpComponent,
    HomeComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

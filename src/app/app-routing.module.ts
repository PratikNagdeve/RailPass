import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'pricing',component:PricingComponent},
  {path:'contact',component:ContactComponent},
  {path:'help',component:HelpComponent},
  {path:'home',component:HomeComponent},
  {path:'booking',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

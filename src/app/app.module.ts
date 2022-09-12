import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ProConnectionServicesModule } from 'pro-connection-services';
import { ProDimmSliderModule } from 'pro-dimm-slider';
import { ProSelectModule } from 'pro-select-component';
import { ProSliderModule } from 'pro-slider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProConnectionServicesModule,
    ProDimmSliderModule,
    ProSelectModule,
    ProSliderModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

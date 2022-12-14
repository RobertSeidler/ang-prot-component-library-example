import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ProConnectionServicesModule } from 'pro-connection-services';
import { ProDimmSliderModule } from 'pro-dimm-slider';
import { ProSelectModule } from 'pro-select-component';
import { ProSliderModule } from 'pro-slider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

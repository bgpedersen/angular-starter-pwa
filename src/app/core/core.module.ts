import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: []
})
export class CoreModule { }

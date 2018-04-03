import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { PostsComponent } from './posts/posts.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

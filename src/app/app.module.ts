import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { LoginComponent } from './views/auth/login/login.component';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './views/admin/users/users.component';
import { CoursesComponent } from './views/admin/courses/courses.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './layouts/user/user.component';
import {NgSimpleProgressBarModule} from 'ng-simple-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgSimpleProgressBarModule,
    NgCircleProgressModule.forRoot({
      "radius": 20,
      "space": -8,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "titleFontSize": "24",
      "unitsColor":"#4882c2",
      "unitsFontSize":"24",
      "titleColor": "#4882c2",
      "animateTitle": true,
      "animationDuration": 1000,
      "showBackground": true,
      "clockwise": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgxSpinnerModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  declarations: [AppComponent, SpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

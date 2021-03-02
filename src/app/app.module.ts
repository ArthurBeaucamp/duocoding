import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './components/practice/practice.component';
import { PraticeMultichoiceComponent } from './components/practice/components/pratice-multichoice/pratice-multichoice.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    PraticeMultichoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrentComponent } from './comps/prent/prent.component';
import { ChildComponent } from './comps/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PrentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NewComponentComponent } from './components/new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

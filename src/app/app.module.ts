import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { myLowercasePipe } from './MyLowercasePipe.pipe';
import { XAmountOfCharactersPipe } from './x-amount-of-characters.pipe';
import { FilterPetsPipe } from './filter-pets.pipe';

@NgModule({
  declarations: [
    AppComponent,
    myLowercasePipe,
    XAmountOfCharactersPipe,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

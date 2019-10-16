import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RangeComponent } from './components/range/range.component';
import { ScalesComponent } from './components/scales/scales.component';
import { ScaletypeComponent } from './components/scaletype/scaletype.component';
import { ChordComponent } from './components/chord/chord.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    RangeComponent,
    ScalesComponent,
    ScaletypeComponent,
    ChordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

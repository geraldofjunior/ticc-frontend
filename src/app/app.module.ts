import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './ui/card/card.component';
import { BoardComponent } from './ui/board/board.component';
import { SpreadComponent } from './ui/spread/spread.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

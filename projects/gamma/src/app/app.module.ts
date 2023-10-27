import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ces imports sont présents
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule], // Assurez-vous que FormsModule et ReactiveFormsModule sont inclus ici
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ces imports sont présents
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [AppComponent, EditModalComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule], // Assurez-vous que FormsModule et ReactiveFormsModule sont inclus ici
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
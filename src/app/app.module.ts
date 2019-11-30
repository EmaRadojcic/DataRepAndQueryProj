import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';




import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
} from '@angular/material';


import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { WarriorReadComponent } from './warrior-read/warrior-read.component';
import { WarriorPipe } from './warrior.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    EditComponent,
    HomePageComponent,
    LoginComponent,
    WarriorReadComponent,
    WarriorPipe,
    FilterPipe
  ],
  imports: [
    MatProgressBarModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

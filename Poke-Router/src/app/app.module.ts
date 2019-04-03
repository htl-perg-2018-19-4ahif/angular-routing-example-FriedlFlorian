import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';

const routes : Routes = [
  {path: 'pokemons', component: PokeListComponent},
  {path: 'pokemons/:id', component: PokeDetailsComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

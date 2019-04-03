import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon{
  name : String;
  url: String;
}

interface IPokeList{
  results : IPokemon[];
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList : IPokemon[];
  filter : String;

  constructor(private http: HttpClient) { 
    this.loadPokemon();
  }

  ngOnInit() {
  }

  async loadPokemon(){
    this.pokeList = (await this.http.get<IPokeList>('https://pokeapi.co/api/v2/pokemon?limit=1000').toPromise()).results;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Identifiers } from '@angular/compiler';

interface IAbilities{
  name: String;
}

interface IPokemon{
  name: String;
  abilities : IAbilities[];
}

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  pokemon : IPokemon;
  id : number;

  constructor(private http : HttpClient,private acRoute: ActivatedRoute) {

  }

  async ngOnInit() {
    this.acRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });
    this.pokemon = (await this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/'+this.id).toPromise());

  }


}

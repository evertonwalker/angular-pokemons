import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon;
  titlePage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.pokemon  = this.route.snapshot.data['pokemon'];
      console.log(this.pokemon);
      this.titlePage = 'Este é o ' + this.pokemon.name;
  }

}

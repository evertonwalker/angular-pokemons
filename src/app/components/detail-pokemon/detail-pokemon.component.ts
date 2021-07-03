import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon;
  titlePage: string;

  constructor(private route: ActivatedRoute, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data) {
      console.log(this.data)
      this.pokemon = this.data;
      this.titlePage = 'Este é o ' + this.pokemon.name;
    } else {
      this.pokemon  = this.route.snapshot.data['pokemon'];
      console.log(this.pokemon);
      this.titlePage = 'Este é o ' + this.pokemon.name;
    }
  }

}

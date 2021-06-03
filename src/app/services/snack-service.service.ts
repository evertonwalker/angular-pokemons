import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackServiceService {

  constructor(private _snackBar: MatSnackBar) { }


  showSnack(message: string, time: number) {
    this._snackBar.open(message, 'X', {
      duration: time,
    })
  }

}

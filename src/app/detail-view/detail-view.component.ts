import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Predstava} from "../../domain/Predstava";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  predstava : Predstava = new Predstava("", "", "", -1);

  constructor(@Inject(MAT_DIALOG_DATA) public data: {predstava: Predstava}) {
    this.predstava = data.predstava;
  }

  onClick(predstava: Predstava) {
    predstava.brojPreostalihMesta--;
    if(predstava.brojPreostalihMesta == 0){

    }
  }
}

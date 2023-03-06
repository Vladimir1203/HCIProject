import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  brojSlobodnihMesta : number = 50;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {brojMesta: number}) {
    this.brojSlobodnihMesta = data.brojMesta;
  }
}

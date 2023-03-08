import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Predstava} from "../../domain/Predstava";

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent {
  brojReda : number | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {brojReda: number}) {
    this.brojReda = data.brojReda;
  }
}

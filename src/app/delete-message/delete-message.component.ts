import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Predstava} from "../../domain/Predstava";

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent {
  brojReda : string | undefined;
  predstava : Predstava = new Predstava(-1, "", "", "", -1);

  constructor(public dialogRef: MatDialogRef<DeleteMessageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {predstava: Predstava}) {
    this.brojReda = data.predstava.naziv;
    this.predstava = data.predstava;
  }

  onDelete($event: MouseEvent) {
    localStorage.removeItem(this.predstava.id+"");
    this.dialogRef.close("success");
  }
}

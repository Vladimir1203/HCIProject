import { Component } from '@angular/core';
import {Predstava} from "../../domain/Predstava";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css']
})
export class NewShowComponent {
  name: string | undefined;
  slike = ["Umbrella-Friends-SVG-TV-Shows-scaled.jpeg", "eye-password-see-view.svg", "man-shows-a-graph.svg",
    "POPEYE-7-LOGO-SVG-PNG-DXF.jpg", "Now-Showing-Sign.jpeg", "WTM-Friends-01-16.jpg"]
  odabranaSlika = this.slike[0];
  nazivPredstave: any;
  opisPredstave: any;

  constructor(public dialogRef: MatDialogRef<NewShowComponent>,) {
  }

  onSubmit() {
    var keys = Object.keys(localStorage);
    var max = this.vratiMaxKljuc(keys);
    let predstava = new Predstava(max+1, "/assets/" + this.odabranaSlika, this.nazivPredstave, this.opisPredstave, 50);
    localStorage.setItem(predstava.id+"", JSON.stringify(predstava));
    this.dialogRef.close("success");
  }

  vratiMaxKljuc(keys: string[]) {
    var max = -1;
    for(let i = 0; i < keys.length; i++){
      const myNumber = parseInt(keys[i]);
      if(max <= myNumber)
        max = myNumber
    }
    return max;
  }
}

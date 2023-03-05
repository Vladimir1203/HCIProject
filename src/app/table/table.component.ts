import {Component} from '@angular/core';
import {Predstava} from "../../domain/Predstava";
import {DetailViewComponent} from "../detail-view/detail-view.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  predstave = [
    new Predstava("/assets/Umbrella-Friends-SVG-TV-Shows-scaled.jpeg", "predstava 1", "Ovo je testna predstava broj jedan snimljena 4. marta 2023."),
    new Predstava("/assets/eye-password-see-view.svg", "predstava 2", "Ovo je testna predstava broj dva snimljena 4. marta 2023."),
    new Predstava("/assets/man-shows-a-graph.svg", "predstava 3", "Ovo je testna predstava broj tri snimljena 4. marta 2023."),
    new Predstava("/assets/POPEYE-7-LOGO-SVG-PNG-DXF.jpg", "predstava 4", "Ovo je testna predstava broj cetiri snimljena 4. marta 2023."),
    new Predstava("/assets/Now-Showing-Sign.jpeg", "predstava 5", "Ovo je testna predstava broj pet snimljena 4. marta 2023."),
    new Predstava("/assets/WTM-Friends-01-16.jpg", "predstava 6", "Ovo je testna predstava broj sest snimljena 4. marta 2023.")
    ]

  constructor(public dialog: MatDialog) {
  }

  onClick(){
    // this.detailViewComponent.openDialog()
    const dialogRef = this.dialog.open(DetailViewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

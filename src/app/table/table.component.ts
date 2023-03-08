import {Component} from '@angular/core';
import {Predstava} from "../../domain/Predstava";
import {DetailViewComponent} from "../detail-view/detail-view.component";
import {MatDialog} from "@angular/material/dialog";
import {NewShowComponent} from "../new-show/new-show.component";
import {DeleteMessageComponent} from "../delete-message/delete-message.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  predstave = [
    new Predstava(1, "/assets/Umbrella-Friends-SVG-TV-Shows-scaled.jpeg", "predstava 1", "Ovo je testna predstava broj jedan snimljena 4. marta 2023.", 47),
    new Predstava(2, "/assets/eye-password-see-view.svg", "predstava 2", "Ovo je testna predstava broj dva snimljena 4. marta 2023.", 50),
    new Predstava(3, "/assets/man-shows-a-graph.svg", "predstava 3", "Ovo je testna predstava broj tri snimljena 4. marta 2023.", 50),
    new Predstava(4, "/assets/POPEYE-7-LOGO-SVG-PNG-DXF.jpg", "predstava 4", "Ovo je testna predstava broj cetiri snimljena 4. marta 2023.", 50),
    new Predstava(5, "/assets/Now-Showing-Sign.jpeg", "predstava 5", "Ovo je testna predstava broj pet snimljena 4. marta 2023.", 50),
    new Predstava(6, "/assets/WTM-Friends-01-16.jpg", "predstava 6", "Ovo je testna predstava broj sest snimljena 4. marta 2023.", 42)
    ]

  constructor(public dialog: MatDialog) {
    for(let i = 0; i < this.predstave.length; i++){
      localStorage.setItem(this.predstave[i].id + "", JSON.stringify(this.predstave[i]));
    }

  }

  onClick(event : any){
    console.log(event.target.textContent)
    let string = event.target.textContent;
    let number : number = string.split(" ")[2]
    console.log(number)

    // this.detailViewComponent.openDialog()
    const dialogRef = this.dialog.open(DetailViewComponent, {data: { predstava : this.predstave[number-1]}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  sortByNameAsc() {
    this.predstave.sort((a, b) => a.naziv.localeCompare(b.naziv));
  }

  sortByNameDesc() {
    this.predstave.sort((a, b) => b.naziv.localeCompare(a.naziv));
  }

  onAddNewShow($event: MouseEvent) {
    const dialogRef = this.dialog.open(NewShowComponent, {data: { predstava : this.predstave[0]}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onClickDelete(event: number){
    let number : number = event;
    console.log(number)
    // this.detailViewComponent.openDialog()
    const dialogRef = this.dialog.open(DeleteMessageComponent, {data: { predstava : this.predstave[number-1]}});
    dialogRef.afterClosed().subscribe(result => {
      if(result === "success"){
        this.predstave.splice(number-1,1);
      }
    });
  }
}

import {Component} from '@angular/core';
import {Predstava} from "../../domain/Predstava";
import {DetailViewComponent} from "../detail-view/detail-view.component";
import {MatDialog} from "@angular/material/dialog";
import {NewShowComponent} from "../new-show/new-show.component";
import {DeleteMessageComponent} from "../delete-message/delete-message.component";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  predstave : Predstava[] = [];
  myArray: any[] | undefined;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
    this.osveziTabelu();
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
      if(result === "success"){
        this.osveziTabelu();
      }
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

  private osveziTabelu() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    for(let i = 0; i < values.length; i++){
      // @ts-ignore
      this.predstave[i] = JSON.parse(values[i]);
    }
  }
}

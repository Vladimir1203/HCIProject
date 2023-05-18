import {Component} from '@angular/core';
import {Predstava} from "../../domain/Predstava";
import {DetailViewComponent} from "../detail-view/detail-view.component";
import {MatDialog} from "@angular/material/dialog";
import {NewShowComponent} from "../new-show/new-show.component";
import {DeleteMessageComponent} from "../delete-message/delete-message.component";
import { ActivatedRoute } from '@angular/router';
import {LocalStorageService} from "../local-storage.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  predstave : Predstava[] = [];
  myArray: any[] | undefined;
  isButtonVisible: boolean = true;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private localStorageService: LocalStorageService) {
   // this.isButtonVisible = localStorageService.isButtonVisible;
    this.isButtonVisible = localStorageService.isButtonVisibleFunction();
    this.osveziTabelu();
  }

  onClick(event : any){
    console.log(event.target.textContent)
    let string = event.target.textContent;
    let number : number = string.split(" ")[2]
    // console.log(number)

    // this.detailViewComponent.openDialog()
    const dialogRef = this.dialog.open(DetailViewComponent, {data: { predstava : this.predstave[number-1]}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  sortByNameAsc() {
    this.predstave.sort((a, b) => {
      const nazivA = a.naziv || ''; // Use empty string if nazivA is null or undefined
      const nazivB = b.naziv || ''; // Use empty string if nazivB is null or undefined
      return nazivA.localeCompare(nazivB);
    });
  }

  sortByNameDesc() {
    this.predstave.sort((a, b) => {
      const nazivA = a.naziv || ''; // Use empty string if nazivA is null or undefined
      const nazivB = b.naziv || ''; // Use empty string if nazivB is null or undefined
      return nazivB.localeCompare(nazivA);
    });
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
      keys = Object.keys(localStorage);

    for (let i = keys.length - 1; i >= 0; i--) {
      let num = parseInt(keys[i]);
      if (isNaN(num)) {
        keys.splice(i, 1); // Remove the element at index i
      }
    }
    let i = keys.length;
    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    for(let i = 0; i < values.length; i++){
      // @ts-ignore
      this.predstave[i] = JSON.parse(values[i]);
    }
  }
}

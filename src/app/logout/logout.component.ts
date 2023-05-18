import { Component } from '@angular/core';
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private localStorageService : LocalStorageService) {
    this.localStorageService.deleteCurrentUser();
  }

}

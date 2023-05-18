import { Component } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HCIPozoristance';
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.initializeData();
  }
}

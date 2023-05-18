import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from "./app.routing.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import {NewShowComponent} from "./new-show/new-show.component";
import {LoginComponent} from "./login/login.component";
import {DeleteMessageComponent} from "./delete-message/delete-message.component";
import {ProfileComponent} from "./profile/profile.component";
import {LocalStorageService} from "./local-storage.service";
import {LogoutComponent} from "./logout/logout.component";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    DetailViewComponent,
    NewShowComponent,
    LoginComponent,
    DeleteMessageComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

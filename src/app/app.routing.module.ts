import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./table/table.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";

const routes : Routes = [
  { path:'', component:LoginComponent },
  { path:'table', component:TableComponent },
  { path:'home', component:TableComponent },
  { path:'profile', component:ProfileComponent },
  { path:'logout', component:LogoutComponent },
  { path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


}

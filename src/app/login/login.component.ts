import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Predstava} from "../../domain/Predstava";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string = "";
  password:string = "";
  predstave : Predstava[] = [];

  constructor(private router : Router) {
  }
  onLogin() {
    if(this.username === "pera" && this.password === "pera"){
      this.popuniLocalStorage();
      this.router.navigate(['table']);
    }else{
      console.log("pogresni kredencijali");
    }
  }

  private popuniLocalStorage() {
    this.predstave = [
      new Predstava(1, "/assets/Umbrella-Friends-SVG-TV-Shows-scaled.jpeg", "predstava 1", "Ovo je testna predstava broj jedan snimljena 4. marta 2023.", 47),
      new Predstava(2, "/assets/eye-password-see-view.svg", "predstava 2", "Ovo je testna predstava broj dva snimljena 4. marta 2023.", 50),
      new Predstava(3, "/assets/man-shows-a-graph.svg", "predstava 3", "Ovo je testna predstava broj tri snimljena 4. marta 2023.", 50),
      new Predstava(4, "/assets/POPEYE-7-LOGO-SVG-PNG-DXF.jpg", "predstava 4", "Ovo je testna predstava broj cetiri snimljena 4. marta 2023.", 50),
      new Predstava(5, "/assets/Now-Showing-Sign.jpeg", "predstava 5", "Ovo je testna predstava broj pet snimljena 4. marta 2023.", 50),
      new Predstava(6, "/assets/WTM-Friends-01-16.jpg", "predstava 6", "Ovo je testna predstava broj sest snimljena 4. marta 2023.", 42)
    ]
    for(let i = 0; i < this.predstave.length; i++){
      localStorage.setItem(this.predstave[i].id + "", JSON.stringify(this.predstave[i]));
    }
  }
}

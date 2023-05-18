import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Predstava} from "../../domain/Predstava";
import {Korisnik} from "../../domain/Korisnik";
import {TipKorisnika} from "../../domain/TipKorisnika";
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string = "";
  password:string = "";
  predstave : Predstava[] = [];
  korisnici: Korisnik[] = [];
  ulogovan: boolean = false;

  constructor(private router : Router, private localStorageService: LocalStorageService) {
    // this.korisnici = [
    //   new Korisnik("pera", "peric", "0606366343", "Dunavskih Virova 10", "pera", "pera123", TipKorisnika.kupac),
    //   new Korisnik("mika", "mikic", "0606366344", "Dunavskih Virova 11", "mika", "mika123", TipKorisnika.zaposleni)
    // ];
    this.korisnici = this.uzmiKorisnikeIzLocalStorage();
  }
  onLogin() {
    this.korisnici = this.uzmiKorisnikeIzLocalStorage();
    for(const k of this.korisnici){
      if(this.username === k.korisnickoIme && this.password === k.sifra){
        this.ulogovan = true;
        this.localStorageService.setCurrentLoggedInUser(k);
        this.popuniLocalStorage();
        this.router.navigate(['table']);
        break;
      }
    }
    if(this.ulogovan == false){
      alert("Pogresni kredencijali");
    }
  }

  private popuniLocalStorage() {
    this.predstave = [
      new Predstava(1, "/assets/Umbrella-Friends-SVG-TV-Shows-scaled.jpeg", "The best", "This is test show from 4. marta 2023.", 47),
      new Predstava(2, "/assets/eye-password-see-view.svg", "The worst", "This one is not like previous one.", 50),
      new Predstava(3, "/assets/man-shows-a-graph.svg", "Nicest one", "Long description for long story", 50),
      new Predstava(4, "/assets/POPEYE-7-LOGO-SVG-PNG-DXF.jpg", "Show Time", "Short description for short story", 50),
      new Predstava(5, "/assets/Now-Showing-Sign.jpeg", "Friends", "This one does not have description", 50),
      new Predstava(6, "/assets/WTM-Friends-01-16.jpg", "Two and a half men", "Free time", 42)
    ]
    for(let i = 0; i < this.predstave.length; i++){
      localStorage.setItem(this.predstave[i].id + "", JSON.stringify(this.predstave[i]));
    }
  }

  private uzmiKorisnikeIzLocalStorage() {
    var values = [],
      keys = Object.keys(localStorage);

    let i = keys.length;
    while ( i-- ) {
      // @ts-ignore
      if(keys[i].includes("korisnik")){
        values.push( localStorage.getItem(keys[i]) );
      }
    }
    for(let i = 0; i < values.length; i++){
      // @ts-ignore
      this.korisnici[i] = JSON.parse(values[i]);
    }
    return this.korisnici;
  }
}

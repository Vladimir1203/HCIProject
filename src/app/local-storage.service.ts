import {Injectable} from '@angular/core';
import {Korisnik} from "../domain/Korisnik";
import {TipKorisnika} from "../domain/TipKorisnika";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  korisnikTrenutni : Korisnik = new Korisnik("", "", "", "", "", "", TipKorisnika.kupac);
  korisnikTemp : Korisnik = new Korisnik("", "", "", "", "", "", TipKorisnika.kupac);
  korisnici: Korisnik[] = [];
  temp: string = "";

  constructor(private router : Router) {
  }

  initializeData(): void {
    const korisnici = [
      new Korisnik("pera", "peric", "0606366343", "Dunavskih Virova 10", "pera", "pera123", TipKorisnika.kupac),
      new Korisnik("mika", "mikic","0606366344", "Dunavskih Virova 11", "mika", "mika123", TipKorisnika.zaposleni)
    ];

    for(let i = 0; i < korisnici.length; i++){
      localStorage.setItem("korisnik " + (i+1), JSON.stringify(korisnici[i]));
    }
  }


  setCurrentLoggedInUser(k : Korisnik) : void{
    localStorage.setItem("trenutni", JSON.stringify(k));
  }

  getCurrentLoggedInUser() : Korisnik{
    var values = [];
    values.push(localStorage.getItem("trenutni"));
    // @ts-ignore
    this.korisnikTrenutni = JSON.parse(values[0]);
    return this.korisnikTrenutni;
  }

  deleteCurrentUser() {
    localStorage.removeItem("trenutni");
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

  setCurrentLoggedInUserAndChangeStarter(korisnik: Korisnik) { //pera111
    this.korisnikTemp = this.getCurrentLoggedInUser(); // pera
    this.setCurrentLoggedInUser(korisnik); // pera111
    this.korisnici = this.uzmiKorisnikeIzLocalStorage(); // korisnik1 korisnik2
    for(const k of this.korisnici){
      if(this.korisnikTemp.korisnickoIme === k.korisnickoIme && this.korisnikTemp.sifra === k.sifra){
        this.korisnikTemp = k; // pera
        break;
      }}
    // now in this.korisnikTemp we have a user that we should delete and replace it with the new user "korisnik"
    var values = [],
      keys = Object.keys(localStorage); //korisnik1 korisnik2

    let i = keys.length;
    while ( i-- ) {
      // @ts-ignore
      if(keys[i].includes("korisnik")){
        values.push( localStorage.getItem(keys[i]) ); //values = pera, mika
        // @ts-ignore
        if( this.compareObjects(JSON.parse(values.pop()), this.korisnikTemp)){
          localStorage.removeItem(keys[i]);
          localStorage.setItem(keys[i], JSON.stringify(korisnik));
          break;
        }
      }
    }
    console.log(korisnik);
  }

  compareObjects(obj1 : Korisnik, obj2 : Korisnik) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      // @ts-ignore
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

  isButtonVisibleFunction() {
    this.korisnikTrenutni = this.getCurrentLoggedInUser();
    if(this.korisnikTrenutni?.tipKorisnika) {
      // @ts-ignore
      return this.korisnikTrenutni.tipKorisnika === TipKorisnika.zaposleni;
    }
      this.router.navigate(['/login']);
      return false;
  }
}

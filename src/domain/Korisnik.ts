export class Korisnik{
  ime: string;
  prezime: string;
  kontaktTelefon: string;
  adresa: string;
  korisnickoIme: string;
  sifra: string;
  tipKorisnika: TipKorisnika


  constructor(ime: string, prezime: string, kontaktTelefon: string, adresa: string, korisnickoIme: string, sifra: string, tipKorisnika: TipKorisnika) {
    this.ime = ime;
    this.prezime = prezime;
    this.kontaktTelefon = kontaktTelefon;
    this.adresa = adresa;
    this.korisnickoIme = korisnickoIme;
    this.sifra = sifra;
    this.tipKorisnika = tipKorisnika;
  }
}

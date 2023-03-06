export class Predstava{
  slika: string;
  naziv: string;
  opis: string;
  brojPreostalihMesta: number;


  constructor(slika: string, naziv: string, opis: string, brojPreostalihMesta: number) {
    this.slika = slika;
    this.naziv = naziv;
    this.opis = opis;
    this.brojPreostalihMesta = brojPreostalihMesta;
  }
}

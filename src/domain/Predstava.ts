export class Predstava{
  id: number;
  slika: string;
  naziv: string;
  opis: string;
  brojPreostalihMesta: number;


  constructor(id: number, slika: string, naziv: string, opis: string, brojPreostalihMesta: number) {
    this.id = id;
    this.slika = slika;
    this.naziv = naziv;
    this.opis = opis;
    this.brojPreostalihMesta = brojPreostalihMesta;
  }
}

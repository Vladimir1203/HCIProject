import { Component } from '@angular/core';
import {Korisnik} from "../../domain/Korisnik";
import {TipKorisnika} from "../../domain/TipKorisnika";
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  korisnik: Korisnik = {
    ime: 'John',
    prezime: 'Doe',
    kontaktTelefon: '1234567890',
    adresa: '123 Main St',
    korisnickoIme: 'johndoe',
    sifra: '*******',
    tipKorisnika: TipKorisnika.kupac
  };
  isEditMode: boolean = false;
  editedKorisnik: Korisnik = {
    ime: '',
    prezime: '',
    kontaktTelefon: '',
    adresa: '',
    korisnickoIme: '',
    sifra: 'vlado',
    tipKorisnika: TipKorisnika.kupac
  };

  TipKorisnika = TipKorisnika; // Expose the enum to the template

  constructor(private localStorageService: LocalStorageService) {
    this.korisnik = localStorageService.korisnikTrenutni;
    this.korisnik = localStorageService.getCurrentLoggedInUser();
  }

  editMode(): void {
    this.isEditMode = true;
    this.editedKorisnik = { ...this.korisnik }; // Create a copy of the korisnik object
  }

  saveChanges(): void {
    // Save changes to the backend or perform necessary actions
    this.korisnik = { ...this.editedKorisnik }; // Update the korisnik object with the edited data
    this.isEditMode = false;

    this.localStorageService.setCurrentLoggedInUserAndChangeStarter(this.korisnik);
    this.localStorageService.setCurrentLoggedInUser(this.korisnik);
  }

  cancel(): void {
    // Revert changes
    this.isEditMode = false;
  }
}

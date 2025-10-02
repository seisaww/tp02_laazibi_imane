import {Component , EventEmitter, Output } from '@angular/core';
import { C2 } from '../c2/c2';
import {FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; // reactive form 

@Component({
  selector: 'app-c1', // nom de la balise à utiliser dans l'app pour l'utiliser dans les différentes vues de l'application
  imports: [ReactiveFormsModule], // faire les imports pour utiliser dans le html 
  templateUrl: './c1.html', // rendu html
  styleUrl: './c1.css' // rendu css
})

export class C1 {
  formulaire = new FormGroup({
    titre: new FormControl('', Validators.required),
    type: new FormControl ('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    lieu: new FormControl('', Validators.required),
    latitude: new FormControl('', [Validators.required, Validators.pattern("^-?\\d+(\.\\d+)?$")]),
    longitude: new FormControl('', [Validators.required, Validators.pattern("^-?\\d+(\.\\d+)?$")]),
    photo: new FormControl('')
  });

  @Output() pollutionDéclarée = new EventEmitter<any>();

  envoi = false;

  send() {
    if (this.formulaire.valid){
      
      this.envoi = true;
      this.pollutionDéclarée.emit(this.formulaire.value);
      this.formulaire.reset();
    } else {
      alert("Formulaire invalide.");
    }
  }

  // send(){
  //   const utilisateur = {
  //     login: this.login,
  //     password: this.mdp,
  //     confirmPassword:this.confirmMdp,
  //     nom: this.nom,
  //     prenom: this.prenom,
  //     email: this.email
  //   }
  // }

 
  }

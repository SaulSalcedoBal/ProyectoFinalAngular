import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../servicesAPINET/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  @ViewChild('user') usuario: ElementRef;
  @ViewChild('pass') pass: ElementRef;

  formLogin: FormGroup;
  submitted = false;

  constructor(private loginsvc: LoginService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      inputUsuario: ['', Validators.required],
      inputPassword: ['', Validators.required]
    });
  }

  get f() { return this.formLogin.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return true;
    }

    const obj = {
      Correo: 'fabishodev@gmail.com',//this.usuario.nativeElement.value,
      Password: '12345' //this.pass.nativeElement.value
    };

    this.loginsvc.login(obj).subscribe(response => {

      if (response != null) {

        // TO DO: Agregar JWT y demas datos del usuario
        const usuario = (<any>response);
        console.log("Token: " + usuario.id);
        //const refreshToken = (<any>response).refreshToken;
        //console.log("Refresh token: " + refreshToken);
        //localStorage.setItem("jwt", token);
        //localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("codigoUsuario", usuario.id);
        localStorage.setItem("nombreCompleto", usuario.nombrecompleto);
        this.route.navigate(['/home']);

      }
    }, err => {

      this.submitted = false;

      this.formLogin.reset({
        'inputUsuario': '',
        'inputPassword': ''
       });

      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Atención',
      //   text: err.error
      // })

    })

    return true;

  }

}

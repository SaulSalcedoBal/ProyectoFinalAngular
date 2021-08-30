import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PolizaService } from '../servicesAPINET/poliza.service';
import { ExpedienteService } from '../servicesAPINET/expediente.service';
import { ConsultaService } from '../servicesAPINET/consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  codCliente = localStorage.getItem("codigoUsuario") ;

  //@ViewChild('farmacia') farmacia: ElementRef;
  //@ViewChild('farmacia') farmacia: ElementRef;

  @ViewChild('folio')
  folio!: ElementRef;
  //@ViewChild('motivo') motivo: ElementRef;

  //formRegister: FormGroup;


  constructor(
    private polizasvc: PolizaService,
    private expedientesvc: ExpedienteService,
    private consultasvc: ConsultaService,
    private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.obtenerDatosPoliza();
    this.obtenerDatosExpediente();
    this.obtenerConsultasPorExpediente();
  }
  onSubmit(){

  }

  obtenerConsultasPorExpediente(){
    const obj = {
      Id: localStorage.getItem("codigoUsuario")

    };

    this.consultasvc.datosConsultasPorExpediente(this.codCliente).subscribe(response => {

      if (response != null) {

        // TO DO: Agregar JWT y demas datos del usuario
        const expediente = (<any>response);
        console.log("Token: " + expediente.id);
        //const refreshToken = (<any>response).refreshToken;
        //console.log("Refresh token: " + refreshToken);
        //localStorage.setItem("jwt", token);
        //localStorage.setItem("refreshToken", refreshToken);
        // localStorage.setItem("codigoUsuario", usuario.id);
        // localStorage.setItem("nombreCompleto", usuario.nombrecompleto);
        //this.route.navigate(['/home']);
        this.folio.nativeElement = expediente.id;

      }
    }, err => {


    })
  }

  obtenerDatosExpediente(){
    const obj = {
      Id: localStorage.getItem("codigoUsuario")

    };

    this.expedientesvc.datosExpediente(this.codCliente).subscribe(response => {

      if (response != null) {

        // TO DO: Agregar JWT y demas datos del usuario
        const expediente = (<any>response);
        console.log("Token: " + expediente.id);
        //const refreshToken = (<any>response).refreshToken;
        //console.log("Refresh token: " + refreshToken);
        //localStorage.setItem("jwt", token);
        //localStorage.setItem("refreshToken", refreshToken);
        // localStorage.setItem("codigoUsuario", usuario.id);
        // localStorage.setItem("nombreCompleto", usuario.nombrecompleto);
        //this.route.navigate(['/home']);
        this.folio.nativeElement = expediente.id;

      }
    }, err => {


    })
  }

  obtenerDatosPoliza(){
    const obj = {
      Id: localStorage.getItem("codigoUsuario")

    };

    this.polizasvc.datosPoliza(this.codCliente).subscribe(response => {

      if (response != null) {

        // TO DO: Agregar JWT y demas datos del usuario
        const poliza = (<any>response);
        console.log("Token: " + poliza.idPoliza);
        //const refreshToken = (<any>response).refreshToken;
        //console.log("Refresh token: " + refreshToken);
        //localStorage.setItem("jwt", token);
        //localStorage.setItem("refreshToken", refreshToken);
        // localStorage.setItem("codigoUsuario", usuario.id);
        // localStorage.setItem("nombreCompleto", usuario.nombrecompleto);
        //this.route.navigate(['/home']);
        this.folio.nativeElement = poliza.idPoliza;

      }
    }, err => {

      // this.submitted = false;

      // this.formLogin.reset({
      //   'inputUsuario': '',
      //   'inputPassword': ''
      //  });

      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Atención',
      //   text: err.error
      // })

    })
  }

}

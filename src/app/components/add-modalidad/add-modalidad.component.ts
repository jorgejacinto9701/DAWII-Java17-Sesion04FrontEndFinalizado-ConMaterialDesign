import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { DeporteService } from 'src/app/services/deporte.service';
import { ModalidadService } from 'src/app/services/modalidad.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent {

    lstDeportes : Deporte[] = [];

    objModalidad: Modalidad = {
          nombre :  "",
          numHombres : 0,
          numMujeres : 0,
          edadMaxima : 0,
          edadMinima : 0,
          sede :  "",
          deporte:{
              idDeporte:-1,
          } 
    };

    constructor(private deporteService: DeporteService, private modalidadService:ModalidadService){

          this.deporteService.listaDeporte().subscribe(
                data => this.lstDeportes = data
          );
    }

    inserta(){
          this.modalidadService.registraModalidad(this.objModalidad).subscribe(
                x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Jacinto',text: x.errores}) 
          );
    }    
}
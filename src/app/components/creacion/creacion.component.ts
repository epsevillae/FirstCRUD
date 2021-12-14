import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {

  @Input() empleadoDetalles={nombre:'',correo:'',telefono:0}

  constructor(
    public restAPi:RestApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  addEmpleado(dataEmpleado:any){
    this.restAPi.createEmpleado(this.empleadoDetalles).subscribe((data:{})=>{
      this.router.navigate(['/consulta'])
    })
  }

}

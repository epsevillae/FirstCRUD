import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  empleados: any=[];

  constructor(
    public restApi:RestApiService
  ) { }

  ngOnInit(): void {
    this.consultarEmpleados();
  }
  // Obtener la lista de empleados:
  consultarEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.empleados = data;
    })
  }
  // Borrar un empleado
  eliminarEmpleado(id:any) {
    if (window.confirm('Está seguro que desea eliminar el dato?')){
      this.restApi.deleteEmpleado(id).subscribe(data => {
        this.consultarEmpleados()
      })
    }
  } 

}

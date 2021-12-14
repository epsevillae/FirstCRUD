import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  id=this.actRoute.snapshot.params['id'];
  empleadoData:any={};

  constructor(
    public restApi:RestApiService,
    public actRoute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.restApi.getEmpleado(this.id).subscribe((data: {}) => {
      this.empleadoData = data;
    })
  }
  // Actualiza los datos del empleado:
  updateEmpleado() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updateEmpleado(this.id, this.empleadoData).subscribe(data => {
        this.router.navigate(['/consulta'])
      })
    }
  }

}

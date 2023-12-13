import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup} from '@angular/forms'
import {ApiService} from '../share/api.service';
import { RegistroModel } from './registro-dashboard.model';

@Component({
  selector: 'app-registro-dashboard',
  templateUrl: './registro-dashboard.component.html',
  styleUrls: ['./registro-dashboard.component.css']
})
export class RegistroDashboardComponent implements OnInit {

  formValue !: FormGroup;
  RegistroModelObj : RegistroModel = new RegistroModel();
  RegistroData !: any;
  showAdd !: boolean;
  ShowUpdate !: boolean;

  constructor(private FormBuilder: FormBuilder,
    private api : ApiService ) { }

    ngOnInit(): void { 
      this.formValue = this.FormBuilder.group({
        cedula : [''],
        apellidos : [''],
        nombres : [''],
        genero : [''],
        ciudad : [''],
        direccion : [''],
        telefono : ['']
      })
      this.getAllRegistro();
    }
    clickAddRegistro(){
      this.formValue.reset();
      this.showAdd = true;
      this.ShowUpdate = false;
    }
    postRegistroDetalles(){
      this.RegistroModelObj.cedula = this.formValue.value.cedula;
      this.RegistroModelObj.apellidos = this.formValue.value.apellidos;
      this.RegistroModelObj.nombres = this.formValue.value.nombres;
      this.RegistroModelObj.genero = this.formValue.value.genero;
      this.RegistroModelObj.ciudad = this.formValue.value.ciudad;
      this.RegistroModelObj.direccion = this.formValue.value.direccion;
      this.RegistroModelObj.telefono= this.formValue.value.telefono;

    
      this.api.postRegistro(this.RegistroModelObj)
      .subscribe(res=> {
        console.log(res);
        alert("Agregado corretamente")
        let ref = document.getElementById('cancelar')
        ref?.click();
        this.formValue.reset(); 
        this.getAllRegistro();
      },
      err=>{
        alert("Intente de nuevo")
      });
    }
    getAllRegistro(){
      this.api.getRegistro()
      .subscribe(res=>{
        this.RegistroData = res;
      });
    }
    deleteRegistro(row:any){
      this.api.deleteRegistro(row.id)
      .subscribe(res=>{
        alert("Registro eliminado");
        this.getAllRegistro();
      })
    }
    onEdit(row:any){
      this.showAdd = false;
      this.ShowUpdate = true;
      this.RegistroModelObj.id=row.id;
      this.formValue.controls['cedula'].setValue(row.cedula);
      this.formValue.controls['apellidos'].setValue(row.apellidos);
      this.formValue.controls['nombres'].setValue(row.nombres);
      this.formValue.controls['genero'].setValue(row.genero);
      this.formValue.controls['ciudad'].setValue(row.ciudad);
      this.formValue.controls['direccion'].setValue(row.direccion);
      this.formValue.controls['telefono'].setValue(row.telefono);
    }
    updateRegistroDetalles(){
      this.RegistroModelObj.cedula = this.formValue.value.cedula;
      this.RegistroModelObj.apellidos = this.formValue.value.apellidos;
      this.RegistroModelObj.nombres = this.formValue.value.nombres;
      this.RegistroModelObj.genero = this.formValue.value.genero;
      this.RegistroModelObj.ciudad = this.formValue.value.ciudad;
      this.RegistroModelObj.direccion = this.formValue.value.direccion;
      this.RegistroModelObj.telefono= this.formValue.value.telefono;

      this.api.updateRegistro(this.RegistroModelObj,this.RegistroModelObj.id)
      .subscribe(res=>{
        alert("Actualizado correctamente");
        let ref = document.getElementById('cancelar')
        ref?.click();
        this.formValue.reset(); 
        this.getAllRegistro();
      })
    }
}



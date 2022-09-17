import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatosService } from "../datos.service";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"],
})
export class RegistrationFormComponent implements OnInit {
  // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  public personas: any[] = [];

  public personForm = this.formBuilder.group({
    nombre: ["", Validators.required],
    direccion: ["", Validators.required],
    telefono: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private datosService: DatosService
  ) {
    this.personas = [];
  }

  ngOnInit(): void {}



  public registerUser() {
    this.personas.push(this.personForm.value);
    this.personForm.reset();
    this.datosService.setUsers(this.personas);
  }

  public generateData() {
    this.datosService.setUsers(this.personas);
  }
}

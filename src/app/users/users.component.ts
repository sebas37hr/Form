import { Component, OnInit, ViewChild } from "@angular/core";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { DatosService } from "../datos.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  @ViewChild(RegistrationFormComponent) register: any;

  //variable donde llegan los datos
  public data: any[] = [];

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.getUsers().subscribe((u) => (this.data = u));
  }
}

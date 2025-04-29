import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-add-employee',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

}

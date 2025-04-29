import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { HeaderComponent } from "../../component/header/header.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,FooterComponent, HeaderComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  public employee:any = {
    name: '',
    email: '',
    department: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  public addCustomer() {
      this.http.post('http://localhost:8080/api/employees', this.employee,{responseType:'text'}).subscribe
  }
}

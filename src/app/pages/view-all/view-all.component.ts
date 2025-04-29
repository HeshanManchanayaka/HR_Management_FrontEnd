import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {
  public employeeList: any = [];

  constructor(private http: HttpClient) {
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.http.get("http://localhost:8080/api/employees").subscribe(data => {
      this.employeeList = data;
      console.log(data);
    });
  }

  public deleteEmployee(id: number): void {
    const confirmed = confirm("Are you sure you want to delete this employee?");
    if (confirmed) {
      this.http.delete(`http://localhost:8080/api/employees/${id}`).subscribe({
        next: () => {
          this.employeeList = this.employeeList.filter((emp: { id: number; }) => emp.id !== id);
          console.log(`Deleted employee with ID: ${id}`);
        },
        error: (error) => {
          console.error(`Failed to delete employee with ID: ${id}`, error);
        }
      });
    }
  }

  

}

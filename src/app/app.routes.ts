import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';

export const routes: Routes = [

    {
        path:"addEmployee",
        component:AddEmployeeComponent
      },
      {
        path:"",
        component:ViewAllComponent
      }
];

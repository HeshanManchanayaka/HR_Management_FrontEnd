import { Routes } from '@angular/router';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

export const routes: Routes = [

      {
        path:'',
        component:ViewAllComponent
      },{
        path:'search',
        component:SearchEmployeeComponent
      }
,
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: '', component: EmployeeFormComponent },
      { path: 'employees/edit/:id', component: EmployeeFormComponent },
      { path: '**', redirectTo: 'employees' },
];

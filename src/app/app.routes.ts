import { Routes } from '@angular/router';
import { UsercreateComponent } from './components/usercreate/usercreate.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
        path: 'user-create',
        component: UsercreateComponent,
        pathMatch: 'full'
      },
      {
        path: 'user-list',
        component: ListComponent,
        pathMatch: 'full'
      },
   
      
];

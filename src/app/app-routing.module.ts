import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
  
  const routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'myApp',
    //   pathMatch: 'full'
    // },
    {
      path: 'view',
      component: UsersComponent
    },
    {
        path: 'edit',
        component: UsersComponent
      }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './shared/components/comments/comments.component';
import { LikesComponent } from './shared/components/likes/likes.component';
import { ParamComponent } from './shared/components/param/param.component';

import { CheckGuard } from './service/check.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'root',
    pathMatch: 'full'
  },
  {
    path: 'root',
    component: RootComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CheckGuard],
    canActivateChild: [CheckGuard],
    canDeactivate:[CheckGuard],
    children: [
      {
        path: 'comments',
        component: CommentsComponent,
        children:[
          {path:'posted/:name',component:ParamComponent}
        ]
      },
      {
        path: 'likes',
        component: LikesComponent
      },

    ]
  }
  // dashboard route end
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}

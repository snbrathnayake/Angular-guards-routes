import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './components/comments/comments.component';
import { LikesComponent } from './components/likes/likes.component';
import { ParamComponent } from './components/param/param.component';


const componets = [
  CommentsComponent,
  LikesComponent,
  ParamComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...componets
   
  ],
  exports:[
    ...componets
  ]
})
export class SharedModule { }

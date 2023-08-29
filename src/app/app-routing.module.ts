import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from 'src/post/post.component';
import { UserProfileComponent } from 'src/user-profile/user-profile.component';

const routes: Routes = [

  {path:'post', loadComponent:()=> import('../post/post.component').then(p=>p.PostComponent),
children:[
  {path:'post/comments', component:CommentsComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

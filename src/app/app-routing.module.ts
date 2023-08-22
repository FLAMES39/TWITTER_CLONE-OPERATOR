import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  // {path:'profile',loadComponent:()=> import('../user-profile/user-profile.component').then(m=>m.UserProfileComponent)},
  {path:'posts',loadComponent:()=> import('../post/post.component').then(m=>m.PostComponent),
  children:
[
  {path:'comments', component:CommentsComponent}
]
},
  // { path: '**', redirectTo: 'profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

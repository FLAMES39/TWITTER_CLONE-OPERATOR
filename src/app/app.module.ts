import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { UserProfileComponent } from 'src/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from 'src/post/post.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        NavbarComponent,
        UserProfileComponent,
        PostComponent
          
        
    ]
})
export class AppModule { }

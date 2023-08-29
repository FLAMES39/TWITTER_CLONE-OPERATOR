import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from 'src/Services/post.service';
import { CommentsComponent } from 'src/app/comments/comments.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule,CommentsComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private postservice: PostService) { }
  posts$ = this.postservice.userPosts$

  ngOnInit(): void {
    this.posts$.subscribe(Posts=>{
      this.postservice.setPostId(Posts[0].id)
    }) 
  }

  onPostClick(event:Event){
// this.postservice.setSelectedPostComments()
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from 'src/Services/post.service';
import { Observable } from 'rxjs';
import { comments } from 'src/Interfaces';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  constructor(private postservice:PostService){}


    comments$= this.postservice.postscomment$
  ngOnInit(): void {
    // let id = event?.target as htmlse
    // this.postservice.setPostId(id)
  }

}

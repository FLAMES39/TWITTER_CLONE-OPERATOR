import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Twitter_clone';
  constructor(private postservice:PostService){}

  ngOnInit(): void {
   this.postservice.setFirstUser()
  }

 
}

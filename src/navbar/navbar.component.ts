import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from 'src/Services/post.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private postservice:PostService){}
  users$=this.postservice.users$

  onChange(event:Event){
    // console.log(event);
    let id = ((event.target as HTMLSelectElement).value)
    this.postservice.setUserId(+[id])
    
  }
}

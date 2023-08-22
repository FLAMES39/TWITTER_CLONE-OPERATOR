import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from 'src/Services/post.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private postservice:PostService){}
  UserDetails$= this.postservice.seletedUserDetails$
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPosts, Users, post } from 'src/Interfaces';
import { Subject, combineLatest, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  users$ = this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  Posts$ = this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts')

  private selectedUser = new Subject<number>
  selectedUser$ = this.selectedUser.asObservable()


  seletedUserDetails$ = this.selectedUser$.pipe(
    switchMap(userid => this.http.get<Users>(`https://jsonplaceholder.typicode.com/users/${userid}`))
  )
  userPosts$ = combineLatest([
    this.seletedUserDetails$,
    this.Posts$
  ]).pipe(
    map(([userDetails, posts]) => {
      return posts.filter(post => post.userId === userDetails.id).map<UserPosts>((post) => ({
        ...post,
        userDetails
      }))
    })
  )

  userPostsandseletedUserDetails$ = combineLatest([
    this.userPosts$,
    this.seletedUserDetails$,
  ]).pipe(
    map(([posts, userDetails]) => {
      posts.map((post) => ({
           ...post,
           userDetails
      }) as UserPosts)
    })
  )


  setFirstUser() {
    this.users$.subscribe(Users => {
      this.selectedUser.next(Users[0].id)
    })
  }
  setUserId(id: number) {
    this.selectedUser.next(id)
  }

}

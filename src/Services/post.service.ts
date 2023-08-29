import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPosts, Users, comments, post, postcomments } from 'src/Interfaces';
import { BehaviorSubject, Observable, Subject, combineLatest, map, mergeMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  users$ = this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  Posts$ = this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts')
  comments$ = this.http.get<comments[]>('https://jsonplaceholder.typicode.com/comments')

  private selectedUser = new Subject<number>
  selectedUser$ = this.selectedUser.asObservable()

  private selectedPost= new Subject<number>
  selectedPost$= this.selectedPost.asObservable()



  selectedPostComments$= this.selectedPost$.pipe(
    switchMap(postid=> this.http.get<post>(`https://jsonplaceholder.typicode.com/posts/${postid}`))
  )


  postscomment$=combineLatest([
    this.selectedPost$,
    this.comments$
  ]).pipe(
    map(([postId,comments])=>{
      return comments.filter(comment=>comment.postId===postId)
    })
  )
  


  postComments$=combineLatest([
    this.selectedPostComments$,
    this.comments$
  ]).pipe(
    map(([postDetails, comments])=>{
      return comments.filter(comment=> comment.postId===postDetails.id).map((comments)=>({
        ...comments,
        postDetails
      }))
    })
  )

  // //findusername


  postCommentsandselectedPostComments$=combineLatest([
    this. selectedPostComments$,
    this.comments$
    
  ]).pipe(
    map(([postDetails,comments])=>{
      comments.map(comment=>({ 
        ...comment,
        postDetails
      }))
    })
  )




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


  //testing if i can get the posts of a specific user///
  //i am locating a post that is for a certaing user by using the id of the post and the userid of the user
  UserPosts$=combineLatest([
    this.selectedUser$,
    this.Posts$
  ]).pipe(
    map(([userid,posts])=>{
     return posts.filter(post=>post.userId===userid)
    })
  )
  userPostsandseletedUserDetails$ = combineLatest([
    this.seletedUserDetails$,
    this.UserPosts$
    
  ]).pipe(
    map(([ userDetails,posts]) => {
      posts.map((post) => ({
           ...post,
           userDetails
      }) as UserPosts)
    })
  )
/////

  setFirstUser() {
    this.users$.subscribe(Users => {
      this.selectedUser.next(Users[0].id)
    })
  }
  setUserId(id: number) {
    this.selectedUser.next(id)
  }

  setPostId(id: number) {
    // console.log(id);
    this.selectedPost.next(id)
  }
  setSelectedPostComments(){
    this.postscomment$.subscribe(postcomments=>{
      this.selectedPost.next(postcomments[0].postId)
    })
  }
}

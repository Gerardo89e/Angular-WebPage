import { Post} from '../post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({providedIn: 'root'})//provides this in the root level in angular
export class PostsService{
  private posts: Post[]=[];
  private postsUpdated= new Subject<Post[]>();
  getPosts(){
    return [...this.posts];
  }
  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPost(title: string, content: string){
    const post: Post={title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

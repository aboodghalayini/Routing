import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError,retry } from 'rxjs';
import { post, postcreate, PostPreview  } from '../models/post.model';
import { List } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL = 'https://dummyapi.io/data/v1';
  options = {
    headers : new HttpHeaders().set('app-id','62b950cfcd3e5a762b7b2a90')
  };
  constructor(private http:HttpClient) { }
  getpost():Observable<List<PostPreview>>{
    return this.http.get<List<PostPreview>>(`${this.baseURL}/post`,{...this.options});
  }
  createpost(payload: postcreate): Observable<post> {
    return this.http.post<post>(`${this.baseURL}/post/create`, payload, this.options).pipe(
        retry(2),
        catchError(this.handleError),
    );
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    console.log('Inside handleError():', error);
    return throwError('some error occurred');
  }
  update(id: string, text:string ):Observable<post> {
    console.log(id);
    return this.http.put<post>(this.baseURL+`/post/${id}`,{text},this.options);
  }
  delete(id:string):Observable<string>{
   return this.http.delete<string>(this.baseURL+'/post/'+id,this.options);
  }
  Getpostbyid(id :string):Observable<List<PostPreview>>{
  return this.http.get<List<PostPreview>>(this.baseURL+'/user/'+id+'/post',this.options);
  }
}

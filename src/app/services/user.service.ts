import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { UserFull,UserPreview,List, CreateUserModel, UpdateUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'https://dummyapi.io/data/v1';
  options = {
    headers : new HttpHeaders().set('app-id','62b950cfcd3e5a762b7b2a90')
  };
  constructor(private http:HttpClient) { }
getUsers():Observable<List<UserPreview>>{
  return this.http.get<List<UserPreview>>(`${this.baseURL}/user`,{...this.options});
  // , params: { created: 1 }
}
createUser(payload: any): Observable<UserPreview> {
  return this.http.post<UserPreview>(`${this.baseURL}/user/create`, payload, this.options).pipe(
      retry(2),
      catchError(this.handleError),
  );
}
handleError(error: HttpErrorResponse): Observable<never> {
  console.log('Inside handleError():', error);
  return throwError('some error occurred');
}
update(id: string, user:any, ):Observable<UserPreview> {
  return this.http.put<UserPreview>(this.baseURL+'/user/'+id,user,this.options);
}
delete(id:string):Observable<string>{
 return this.http.delete<string>(this.baseURL+'/user/'+id,this.options);
}
GetUserbyid(id :string):Observable<UserFull>{
return this.http.get<UserFull>(this.baseURL+'/user/'+id,this.options);
}
}

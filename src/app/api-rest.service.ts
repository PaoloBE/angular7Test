import { Injectable } from '@angular/core';
import { Observable,of,throwError } from 'rxjs';
import { catchError,tap,map } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http'
import { Curso} from './curso';

const httpOp = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
}
const url= 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { 
    
  }
  private handleError<T> (operation = 'operation',result?:T){
    return (error:any):  Observable<T>=>{
      console.error()
    }
  }
}

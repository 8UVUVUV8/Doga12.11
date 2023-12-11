import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  booksSub = new Subject()
  url = "https://localhost:7017/api/Books/"
  constructor(private http:HttpClient) { }
  loadBooks(){
    this.http.get(this.url).subscribe(
      (res)=>this.booksSub.next(res)
    )
  }
  getBooks(){
    return this.booksSub
  }
  postBook(body:any){
    this.http.post(this.url,body).subscribe(
      ()=>this.loadBooks()
    )
  }
  putBook(body:any){
    this.http.put(this.url+body.id,body).subscribe(
      ()=>this.loadBooks()
    )
  }
  deleteBook(body:any){
    this.http.delete(this.url).subscribe(
      ()=>this.loadBooks()
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from './interface/UserResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
    title = 'app';

  constructor(private http: HttpClient) {

  }

    ngOnInit(): void {
      this.reqGet();
      this.reqPost();
    }

    reqGet() {
        this.http.get<UserResponse>('https://api.github.com/users/reuno92').subscribe(
            data => {
                console.log('User login: ' + data.login);
                console.log('Bio: ' + data.bio);
                console.log('Company: ' + data.company);
                console.log(data);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('ReqGet Client-side error occured:');
                    console.log('ReqGet Error Message: ', err.message);
                } else {
                    console.log('ReqGet Server-side error occured');
                    console.log('ReqGet Error Message: ', err.message);
                }
            }
        );
    }

    reqPost() {
        this.http.post('http://jsonplaceholder.typicode.com/posts',
            {
                title: 'foo',
                body: 'bar',
                userId: 1
            }).subscribe(
            res => {
                console.log(res);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  console.log('ReqPost: Client-side error occured');
                } else {
                  console.log('ReqPost: Server-side error occured');
                  console.log(err);
                }
            }
        );
    }

}



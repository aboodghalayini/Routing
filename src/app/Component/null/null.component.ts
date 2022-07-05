import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-null',
  templateUrl: './null.component.html',
  styleUrls: ['./null.component.css']
})
export class NullComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['home']);
    }
}

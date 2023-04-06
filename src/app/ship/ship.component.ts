import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit{

  addForm!:FormGroup;
  constructor(private api: ApiService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.addForm=this.fb.group({
      name:[''],
      length:[''],
      price:[''],
      person:[''],
      trailer:[''],
    });
    this.getShips();
  }

  getShips(){
    this.api.getShips().subscribe({
      next:res=>{
        console.log(res);
      }
    })
  }

/* addship!:any; */
  addShip(){
    this.api.addShip().subscribe({
      next:res=>{
        console.log(res)
      }
    })
  }
}

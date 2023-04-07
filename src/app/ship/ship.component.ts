/*
* File: ship.component.ts
* Author: Kovács Dorina
* Copyright: 2023, Kovács Dorina
* Group: Szoft II/N
* Date: 2023-04-07
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      id:['',Validators.required],
      name:['', Validators.required],
      length:['', Validators.required],
      price:['', Validators.required],
      person:['', Validators.required],
      trailer:['', Validators.required],
    });
    this.getShips();
  }

  ships!:any;
  getShips(){
    this.api.getShips().subscribe({
      next:res=>{
        console.log(res);
        this.ships=res;
      }
    })
  }

  show!:any;
  button(){
    this.show=true;
  }

  addShip(){
    let ship={
      id:this.addForm.value.id,
      name:this.addForm.value.name,
      length:this.addForm.value.length,
      price:this.addForm.value.price,
      person:this.addForm.value.person,
      trailer:this.addForm.value.trailer
    }
    this.api.addShip(ship).subscribe({
      next:res=>{
        console.log(res, 'Success!');
      }
    })
  }
}

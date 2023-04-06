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
      id:[''],
      name:[''],
      length:[''],
      price:[''],
      person:[''],
      trailer:[''],
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
        console.log(res, 'Success!')
      }
    })
  }
}

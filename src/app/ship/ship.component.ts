import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit{

  constructor(private api: ApiService,){}

  ngOnInit(): void {
    this.getShips();
  }

  getShips(){
    this.api.getShips().subscribe({
      next:res=>{
        console.log(res);
      }
    })
  }

  addShip(){

  }
}

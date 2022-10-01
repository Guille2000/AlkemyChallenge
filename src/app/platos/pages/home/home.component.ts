import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayPlatos: any = [];
  constructor(private service: WarehouseService) { }

  ngOnInit(): void {
    this.arrayPlatos = this.service.misPlatos;
  }

}

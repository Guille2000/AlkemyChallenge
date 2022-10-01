import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})
export class AcumuladorComponent implements OnInit {

  constructor(public wh:WarehouseService) { }

  ngOnInit(): void {
  }

}

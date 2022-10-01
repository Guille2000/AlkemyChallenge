import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorUtilidadComponent } from './buscador-utilidad.component';

describe('BuscadorUtilidadComponent', () => {
  let component: BuscadorUtilidadComponent;
  let fixture: ComponentFixture<BuscadorUtilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorUtilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorUtilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

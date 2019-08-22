import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosMaestrosComponent } from './pagos-maestros.component';

describe('PagosMaestrosComponent', () => {
  let component: PagosMaestrosComponent;
  let fixture: ComponentFixture<PagosMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

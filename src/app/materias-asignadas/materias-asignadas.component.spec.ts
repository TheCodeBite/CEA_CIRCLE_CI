import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAsignadasComponent } from './materias-asignadas.component';

describe('MateriasAsignadasComponent', () => {
  let component: MateriasAsignadasComponent;
  let fixture: ComponentFixture<MateriasAsignadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAsignadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

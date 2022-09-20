import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgregarNavesComponent } from './vista-agregar-naves.component';

describe('VistaAgregarNavesComponent', () => {
  let component: VistaAgregarNavesComponent;
  let fixture: ComponentFixture<VistaAgregarNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAgregarNavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAgregarNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

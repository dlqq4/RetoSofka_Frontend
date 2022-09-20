import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNaveTripuladaComponent } from './vista-nave-tripulada.component';

describe('VistaNaveTripuladaComponent', () => {
  let component: VistaNaveTripuladaComponent;
  let fixture: ComponentFixture<VistaNaveTripuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaNaveTripuladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaNaveTripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

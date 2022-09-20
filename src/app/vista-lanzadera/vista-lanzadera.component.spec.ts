import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLanzaderaComponent } from './vista-lanzadera.component';

describe('VistaLanzaderaComponent', () => {
  let component: VistaLanzaderaComponent;
  let fixture: ComponentFixture<VistaLanzaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaLanzaderaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaLanzaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

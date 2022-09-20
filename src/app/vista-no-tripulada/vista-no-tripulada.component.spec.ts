import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNOTripuladaComponent } from './vista-no-tripulada.component';

describe('VistaNOTripuladaComponent', () => {
  let component: VistaNOTripuladaComponent;
  let fixture: ComponentFixture<VistaNOTripuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaNOTripuladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaNOTripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

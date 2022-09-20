import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBuscarNavesComponent } from './vista-buscar-naves.component';

describe('VistaBuscarNavesComponent', () => {
  let component: VistaBuscarNavesComponent;
  let fixture: ComponentFixture<VistaBuscarNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaBuscarNavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaBuscarNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

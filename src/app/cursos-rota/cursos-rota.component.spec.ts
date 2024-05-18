import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosRotaComponent } from './cursos-rota.component';

describe('CursosRotaComponent', () => {
  let component: CursosRotaComponent;
  let fixture: ComponentFixture<CursosRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosRotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

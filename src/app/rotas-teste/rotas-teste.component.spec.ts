import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasTesteComponent } from './rotas-teste.component';

describe('RotasTesteComponent', () => {
  let component: RotasTesteComponent;
  let fixture: ComponentFixture<RotasTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotasTesteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotasTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

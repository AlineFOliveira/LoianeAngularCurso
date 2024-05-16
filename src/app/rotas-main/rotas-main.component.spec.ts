import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasMainComponent } from './rotas-main.component';

describe('RotasMainComponent', () => {
  let component: RotasMainComponent;
  let fixture: ComponentFixture<RotasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotasMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

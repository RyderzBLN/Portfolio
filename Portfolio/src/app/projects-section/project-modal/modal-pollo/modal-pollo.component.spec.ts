import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPolloComponent } from './modal-pollo.component';

describe('ModalPolloComponent', () => {
  let component: ModalPolloComponent;
  let fixture: ComponentFixture<ModalPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

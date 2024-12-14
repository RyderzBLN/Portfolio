import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalElPoloComponent } from './project-modal-el-polo.component';

describe('ProjectModalElPoloComponent', () => {
  let component: ProjectModalElPoloComponent;
  let fixture: ComponentFixture<ProjectModalElPoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalElPoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectModalElPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

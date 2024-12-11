import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerApplicationComponent } from './employer-application.component';

describe('EmployerApplicationComponent', () => {
  let component: EmployerApplicationComponent;
  let fixture: ComponentFixture<EmployerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

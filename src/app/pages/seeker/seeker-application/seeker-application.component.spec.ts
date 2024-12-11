import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerApplicationComponent } from './seeker-application.component';

describe('SeekerApplicationComponent', () => {
  let component: SeekerApplicationComponent;
  let fixture: ComponentFixture<SeekerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

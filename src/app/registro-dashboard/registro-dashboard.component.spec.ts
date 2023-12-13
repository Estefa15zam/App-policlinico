import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDashboardComponent } from './registro-dashboard.component';

describe('RegistroDashboardComponent', () => {
  let component: RegistroDashboardComponent;
  let fixture: ComponentFixture<RegistroDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDashboardComponent]
    });
    fixture = TestBed.createComponent(RegistroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

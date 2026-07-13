import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsAdmin } from './apartments-admin';

describe('ApartmentsAdmin', () => {
  let component: ApartmentsAdmin;
  let fixture: ComponentFixture<ApartmentsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmentsAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

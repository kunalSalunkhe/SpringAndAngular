import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsCustomerComponent } from './all-accounts-customer.component';

describe('AllAccountsCustomerComponent', () => {
  let component: AllAccountsCustomerComponent;
  let fixture: ComponentFixture<AllAccountsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAccountsCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAccountsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

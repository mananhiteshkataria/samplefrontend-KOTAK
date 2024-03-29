import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAddComponent } from './cust-add.component';

describe('CustAddComponent', () => {
  let component: CustAddComponent;
  let fixture: ComponentFixture<CustAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

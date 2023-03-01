import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFooterComponent } from './log-footer.component';

describe('LogFooterComponent', () => {
  let component: LogFooterComponent;
  let fixture: ComponentFixture<LogFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

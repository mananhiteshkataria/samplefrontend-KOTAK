import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogHeadComponent } from './log-head.component';

describe('LogHeadComponent', () => {
  let component: LogHeadComponent;
  let fixture: ComponentFixture<LogHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

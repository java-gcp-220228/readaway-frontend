import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayTimerComponent } from './giveaway-timer.component';

describe('GiveawayTimerComponent', () => {
  let component: GiveawayTimerComponent;
  let fixture: ComponentFixture<GiveawayTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

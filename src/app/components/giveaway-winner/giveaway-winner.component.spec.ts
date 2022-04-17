import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayWinnerComponent } from './giveaway-winner.component';

describe('GiveawayWinnerComponent', () => {
  let component: GiveawayWinnerComponent;
  let fixture: ComponentFixture<GiveawayWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

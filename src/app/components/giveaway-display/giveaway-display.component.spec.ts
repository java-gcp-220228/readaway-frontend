import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayDisplayComponent } from './giveaway-display.component';

describe('GiveawayDisplayComponent', () => {
  let component: GiveawayDisplayComponent;
  let fixture: ComponentFixture<GiveawayDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

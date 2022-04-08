import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayButtonComponent } from './giveaway-button.component';

describe('GiveawayButtonComponent', () => {
  let component: GiveawayButtonComponent;
  let fixture: ComponentFixture<GiveawayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

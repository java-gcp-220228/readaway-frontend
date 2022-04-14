import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayTableComponent } from './giveaway-table.component';

describe('GiveawayTableComponent', () => {
  let component: GiveawayTableComponent;
  let fixture: ComponentFixture<GiveawayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

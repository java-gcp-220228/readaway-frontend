import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayEntriesComponent } from './giveaway-entries.component';

describe('GiveawayEntriesComponent', () => {
  let component: GiveawayEntriesComponent;
  let fixture: ComponentFixture<GiveawayEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

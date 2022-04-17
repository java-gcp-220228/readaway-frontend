import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayCreationComponent } from './giveaway-creation.component';

describe('GiveawayCreationComponent', () => {
  let component: GiveawayCreationComponent;
  let fixture: ComponentFixture<GiveawayCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

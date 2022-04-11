import { TestBed } from '@angular/core/testing';

import { GiveawayService } from './giveaway.service';

describe('GiveawayService', () => {
  let service: GiveawayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiveawayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShareService } from './share.service';

describe('ShareService', () => {
  let service: ShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareService],
    });
    service = TestBed.inject(ShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set data and return it formatted', () => {
    const mockData = {
      0: {
        fullName: 'John Doe',
        kinship: 'Son',
        percentage: '50%',
      },
      1: {
        fullName: 'Mary Doe',
        kinship: 'Daughter',
        percentage: '50%',
      },
    };

    service.setData(mockData);

    expect(service.getData()).toEqual([
      {
        fullName: 'John Doe',
        kinship: 'Son',
        percentage: '50%',
      },
      {
        fullName: 'Mary Doe',
        kinship: 'Daughter',
        percentage: '50%',
      },
    ]);
  });
});

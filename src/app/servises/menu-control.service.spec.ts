import { TestBed } from '@angular/core/testing';

import { MenuControlService } from './menu-control.service';

describe('MenuControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuControlService = TestBed.get(MenuControlService);
    expect(service).toBeTruthy();
  });
});

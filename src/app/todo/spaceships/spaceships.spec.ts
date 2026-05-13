import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceships } from './spaceships';

describe('Spaceships', () => {
  let component: Spaceships;
  let fixture: ComponentFixture<Spaceships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceships],
    }).compileComponents();

    fixture = TestBed.createComponent(Spaceships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

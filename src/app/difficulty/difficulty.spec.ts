import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Difficulty } from './difficulty';

describe('Difficulty', () => {
  let component: Difficulty;
  let fixture: ComponentFixture<Difficulty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Difficulty],
    }).compileComponents();

    fixture = TestBed.createComponent(Difficulty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

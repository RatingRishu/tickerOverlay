import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingTeamComponent } from './bowling-team.component';

describe('BowlingTeamComponent', () => {
  let component: BowlingTeamComponent;
  let fixture: ComponentFixture<BowlingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

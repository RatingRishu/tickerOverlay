import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSummaryComponent } from './match-summary.component';

describe('MatchSummaryComponent', () => {
  let component: MatchSummaryComponent;
  let fixture: ComponentFixture<MatchSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

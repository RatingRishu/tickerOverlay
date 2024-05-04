import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingTeamComponent } from './batting-team.component';

describe('BattingTeamComponent', () => {
  let component: BattingTeamComponent;
  let fixture: ComponentFixture<BattingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattingTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

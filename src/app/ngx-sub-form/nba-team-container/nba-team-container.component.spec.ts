import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaTeamContainerComponent } from './nba-team-container.component';

describe('NbaTeamContainerComponent', () => {
  let component: NbaTeamContainerComponent;
  let fixture: ComponentFixture<NbaTeamContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaTeamContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaTeamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

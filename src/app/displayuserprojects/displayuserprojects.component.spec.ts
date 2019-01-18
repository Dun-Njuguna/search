import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayuserprojectsComponent } from './displayuserprojects.component';

describe('DisplayuserprojectsComponent', () => {
  let component: DisplayuserprojectsComponent;
  let fixture: ComponentFixture<DisplayuserprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayuserprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayuserprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

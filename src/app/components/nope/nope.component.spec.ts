import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopeComponent } from './nope.component';

describe('NopeComponent', () => {
  let component: NopeComponent;
  let fixture: ComponentFixture<NopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RimgtestComponent } from './rimgtest.component';

describe('RimgtestComponent', () => {
  let component: RimgtestComponent;
  let fixture: ComponentFixture<RimgtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RimgtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RimgtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

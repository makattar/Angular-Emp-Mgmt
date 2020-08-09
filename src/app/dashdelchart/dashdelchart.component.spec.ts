import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdelchartComponent } from './dashdelchart.component';

describe('DashdelchartComponent', () => {
  let component: DashdelchartComponent;
  let fixture: ComponentFixture<DashdelchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashdelchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashdelchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

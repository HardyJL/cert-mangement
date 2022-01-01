import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargethostsComponent } from './targethosts.component';

describe('TargethostsComponent', () => {
  let component: TargethostsComponent;
  let fixture: ComponentFixture<TargethostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargethostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargethostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

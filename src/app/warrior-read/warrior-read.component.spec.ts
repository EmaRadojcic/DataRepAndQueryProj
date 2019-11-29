import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorReadComponent } from './warrior-read.component';

describe('WarriorReadComponent', () => {
  let component: WarriorReadComponent;
  let fixture: ComponentFixture<WarriorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarriorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

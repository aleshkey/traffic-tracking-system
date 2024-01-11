import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourTableComponent } from './behaviour-table.component';

describe('BehaviourTableComponent', () => {
  let component: BehaviourTableComponent;
  let fixture: ComponentFixture<BehaviourTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviourTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

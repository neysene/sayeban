import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipComponent } from './edit-tip.component';

describe('EditTipComponent', () => {
  let component: EditTipComponent;
  let fixture: ComponentFixture<EditTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

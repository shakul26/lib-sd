import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmGridComponent } from './rm-grid.component';

describe('RmGridComponent', () => {
  let component: RmGridComponent;
  let fixture: ComponentFixture<RmGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

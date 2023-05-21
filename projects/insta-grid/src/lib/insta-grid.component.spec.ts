import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaGridComponent } from './insta-grid.component';

describe('InstaGridComponent', () => {
  let component: InstaGridComponent;
  let fixture: ComponentFixture<InstaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

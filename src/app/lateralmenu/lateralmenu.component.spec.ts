import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralmenuComponent } from './lateralmenu.component';

describe('LateralmenuComponent', () => {
  let component: LateralmenuComponent;
  let fixture: ComponentFixture<LateralmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

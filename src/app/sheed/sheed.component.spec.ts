import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheedComponent } from './sheed.component';

describe('SheedComponent', () => {
  let component: SheedComponent;
  let fixture: ComponentFixture<SheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

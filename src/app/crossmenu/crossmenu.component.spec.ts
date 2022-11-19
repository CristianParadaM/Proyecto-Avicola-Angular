import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossmenuComponent } from './crossmenu.component';

describe('CrossmenuComponent', () => {
  let component: CrossmenuComponent;
  let fixture: ComponentFixture<CrossmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

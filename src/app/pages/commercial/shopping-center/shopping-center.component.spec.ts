import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCenterComponent } from './shopping-center.component';

describe('ShoppingCenterComponent', () => {
  let component: ShoppingCenterComponent;
  let fixture: ComponentFixture<ShoppingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

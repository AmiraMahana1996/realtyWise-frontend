import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchardsComponent } from './orchards.component';

describe('OrchardsComponent', () => {
  let component: OrchardsComponent;
  let fixture: ComponentFixture<OrchardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

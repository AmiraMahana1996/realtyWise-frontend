import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedConnectionComponent } from './accepted-connection.component';

describe('AcceptedConnectionComponent', () => {
  let component: AcceptedConnectionComponent;
  let fixture: ComponentFixture<AcceptedConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

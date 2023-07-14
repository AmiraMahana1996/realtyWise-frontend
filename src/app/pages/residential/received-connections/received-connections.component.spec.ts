import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedConnectionsComponent } from './received-connections.component';

describe('ReceivedConnectionsComponent', () => {
  let component: ReceivedConnectionsComponent;
  let fixture: ComponentFixture<ReceivedConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

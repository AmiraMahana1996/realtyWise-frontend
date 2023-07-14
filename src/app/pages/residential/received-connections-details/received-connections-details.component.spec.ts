import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedConnectionsDetailsComponent } from './received-connections-details.component';

describe('ReceivedConnectionsDetailsComponent', () => {
  let component: ReceivedConnectionsDetailsComponent;
  let fixture: ComponentFixture<ReceivedConnectionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedConnectionsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedConnectionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

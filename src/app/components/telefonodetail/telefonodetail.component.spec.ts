import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonodetailComponent } from './telefonodetail.component';

describe('TelefonodetailComponent', () => {
  let component: TelefonodetailComponent;
  let fixture: ComponentFixture<TelefonodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonodetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

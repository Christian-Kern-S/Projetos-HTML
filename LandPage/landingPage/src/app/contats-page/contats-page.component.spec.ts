import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatsPageComponent } from './contats-page.component';

describe('ContatsPageComponent', () => {
  let component: ContatsPageComponent;
  let fixture: ComponentFixture<ContatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

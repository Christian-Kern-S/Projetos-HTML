import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasPageComponent } from './duvidas-page.component';

describe('DuvidasPageComponent', () => {
  let component: DuvidasPageComponent;
  let fixture: ComponentFixture<DuvidasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuvidasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuvidasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

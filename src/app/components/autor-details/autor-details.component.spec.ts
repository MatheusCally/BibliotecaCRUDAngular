import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDetailsComponent } from './autor-details.component';

describe('AutorDetailsComponent', () => {
  let component: AutorDetailsComponent;
  let fixture: ComponentFixture<AutorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

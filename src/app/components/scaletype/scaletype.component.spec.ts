import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaletypeComponent } from './scaletype.component';

describe('ScaletypeComponent', () => {
  let component: ScaletypeComponent;
  let fixture: ComponentFixture<ScaletypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaletypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

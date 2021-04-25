import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchFormComponent } from './herosearchform.component';

describe('HeroSearchFormComponent', () => {
  let component: HeroSearchFormComponent;
  let fixture: ComponentFixture<HeroSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

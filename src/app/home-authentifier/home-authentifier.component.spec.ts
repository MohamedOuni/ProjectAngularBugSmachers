import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuthentifierComponent } from './home-authentifier.component';

describe('HomeAuthentifierComponent', () => {
  let component: HomeAuthentifierComponent;
  let fixture: ComponentFixture<HomeAuthentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAuthentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAuthentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

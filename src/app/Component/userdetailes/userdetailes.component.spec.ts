import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailesComponent } from './userdetailes.component';

describe('UserdetailesComponent', () => {
  let component: UserdetailesComponent;
  let fixture: ComponentFixture<UserdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

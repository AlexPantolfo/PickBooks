import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBazarComponent } from './book-bazar.component';

describe('BookBazarComponent', () => {
  let component: BookBazarComponent;
  let fixture: ComponentFixture<BookBazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBazarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

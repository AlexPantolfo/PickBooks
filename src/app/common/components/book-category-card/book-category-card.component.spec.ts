import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategoryCardComponent } from './book-category-card.component';

describe('BookCategoryCardComponent', () => {
  let component: BookCategoryCardComponent;
  let fixture: ComponentFixture<BookCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCategoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

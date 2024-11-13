import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackatonPage } from './hackaton.page';

describe('HackatonPage', () => {
  let component: HackatonPage;
  let fixture: ComponentFixture<HackatonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HackatonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

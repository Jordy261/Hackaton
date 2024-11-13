import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeAtelierPage } from './liste-atelier.page';

describe('ListeAtelierPage', () => {
  let component: ListeAtelierPage;
  let fixture: ComponentFixture<ListeAtelierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAtelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

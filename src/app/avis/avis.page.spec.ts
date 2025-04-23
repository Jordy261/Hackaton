import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisPage } from './avis.page';

describe('AvisPage', () => {
  let component: AvisPage;
  let fixture: ComponentFixture<AvisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCommentairePage } from './liste-commentaire.page';

describe('ListeCommentairePage', () => {
  let component: ListeCommentairePage;
  let fixture: ComponentFixture<ListeCommentairePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommentairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

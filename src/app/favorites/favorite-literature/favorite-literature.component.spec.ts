import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLiteratureComponent } from './favorite-literature.component';

describe('FavoriteLiteratureComponent', () => {
  let component: FavoriteLiteratureComponent;
  let fixture: ComponentFixture<FavoriteLiteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteLiteratureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

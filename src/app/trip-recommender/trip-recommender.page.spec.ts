import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripRecommenderPage } from './trip-recommender.page';

describe('TripRecommenderPage', () => {
  let component: TripRecommenderPage;
  let fixture: ComponentFixture<TripRecommenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripRecommenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripRecommenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

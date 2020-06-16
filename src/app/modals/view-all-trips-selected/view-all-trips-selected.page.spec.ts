import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllTripsSelectedPage } from './view-all-trips-selected.page';

describe('ViewAllTripsSelectedPage', () => {
  let component: ViewAllTripsSelectedPage;
  let fixture: ComponentFixture<ViewAllTripsSelectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTripsSelectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllTripsSelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

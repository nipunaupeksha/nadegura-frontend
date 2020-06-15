import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelModalPage } from './hotel-modal.page';

describe('HotelModalPage', () => {
  let component: HotelModalPage;
  let fixture: ComponentFixture<HotelModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

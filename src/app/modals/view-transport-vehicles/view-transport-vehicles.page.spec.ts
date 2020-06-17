import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTransportVehiclesPage } from './view-transport-vehicles.page';

describe('ViewTransportVehiclesPage', () => {
  let component: ViewTransportVehiclesPage;
  let fixture: ComponentFixture<ViewTransportVehiclesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransportVehiclesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTransportVehiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

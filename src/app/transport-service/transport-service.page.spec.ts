import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportServicePage } from './transport-service.page';

describe('TransportServicePage', () => {
  let component: TransportServicePage;
  let fixture: ComponentFixture<TransportServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

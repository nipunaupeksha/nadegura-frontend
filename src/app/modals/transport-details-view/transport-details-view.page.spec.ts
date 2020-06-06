import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportDetailsViewPage } from './transport-details-view.page';

describe('TransportDetailsViewPage', () => {
  let component: TransportDetailsViewPage;
  let fixture: ComponentFixture<TransportDetailsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportDetailsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportDetailsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

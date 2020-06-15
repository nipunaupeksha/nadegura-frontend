import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportModalPage } from './transport-modal.page';

describe('TransportModalPage', () => {
  let component: TransportModalPage;
  let fixture: ComponentFixture<TransportModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

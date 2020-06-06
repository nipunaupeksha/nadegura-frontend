import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceSelectPage } from './service-select.page';

describe('ServiceSelectPage', () => {
  let component: ServiceSelectPage;
  let fixture: ComponentFixture<ServiceSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

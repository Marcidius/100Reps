/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                               from '@angular/platform-browser';
import { DebugElement }                     from '@angular/core';
import { provideRoutes }                     from '@angular/router';
import { RouterTestingModule }                     from '@angular/router/testing';

import { HeaderComponent }            from './header.component';
import { RouterLinkStubDirective }    from '../../shared/router-stubs';
import { RouterOutletStubComponent }  from '../../shared/router-stubs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [ LayoutModule ],
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      providers: [ provideRoutes([{path: 'fakeRouteForTesting', redirectTo: 'fakeRouteForTesting', pathMatch: 'full'}])
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

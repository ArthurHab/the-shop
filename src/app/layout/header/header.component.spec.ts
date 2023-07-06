import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app-header', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-navbar',() => {
    const navbarComponent = fixture.nativeElement.querySelector('app-navbar');
    expect(navbarComponent).toBeTruthy();
  });
});

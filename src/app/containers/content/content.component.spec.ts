import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterOutlet],
      declarations: [ContentComponent]
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app-content', () => {
    expect(component).toBeTruthy();
  });

  it('should have router-outlet inside app-content', () => {
    const routerOutletComponent = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutletComponent).toBeTruthy();
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from 'src/app/user/user.component';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'user',
            component: UserComponent,
          },
        ]),
      ],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to user page when clicking on the banner', () => {
    const spy = spyOn(router, 'navigateByUrl');
    const banner = fixture.nativeElement.querySelector('a');
    banner.click();

    const expectedPath = (spy.calls.all()[0].object as Router).config[0].path;

    expect(expectedPath).toContain('user');
  });
});

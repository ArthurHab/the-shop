import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;

  setShowMenu = () => {
    this.showMenu =  !this.showMenu;
  }

  closeShowMenu = () => {
    this.showMenu =  false;
  }
}

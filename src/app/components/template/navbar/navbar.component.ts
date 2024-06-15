import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  side_buttons: any[] = [
    { path: "/login", name: "Login", icon: "login", visible: true },
    { path: "/cadastro-quadras", name: "Quadras", icon: "add_circle", visible: true }
  ]

  @ViewChild('sidenav', { static: true })
  private sidenav!: MatSidenav;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.setSidenav(this.sidenav);
  }


}

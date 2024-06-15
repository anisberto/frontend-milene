import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(
    private navbarService: NavbarService) { }

  ngOnInit(): void {}

  toggle(){
    this.navbarService.toggle();
  }
}

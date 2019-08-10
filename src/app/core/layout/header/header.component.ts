import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();
  sidebarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle the sidenav menu.
   */
  toggleSidenav() {
      this.sidebarOpened = !this.sidebarOpened;
      this.toggleSidebar.emit(this.sidebarOpened);
  }

}

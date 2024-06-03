import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  sidebarVisible = true;
  sidebarItems = [
    { name: 'Employees', link: '/main/employees' },
    { name: 'Leaves', link: '/main/leaves' },
    { name: 'Expenses', link: '/main/expenses' }
  ];

  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

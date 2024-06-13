import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() sidebarItems: { name: string, link: string }[] = [
    { name: 'Employees', link: '/main/employees' },
    { name: 'Leaves', link: '/main/leaves' },
    // { name: 'Expenses', link: '/main/expenses' }
  ];
}

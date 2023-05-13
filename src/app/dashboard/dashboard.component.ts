import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.sidebarService.toggle(true);
  }

}

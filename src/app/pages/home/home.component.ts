import { Component } from '@angular/core';
import { HomeService } from 'src/app/common/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public personagens?: any[];

  constructor(
    private homeService: HomeService
  ) { }

  teste() {
    this.homeService.getAll().subscribe({
      error: (err) => { console.log('err', err) },
      next: (rs: any) => {
        console.log('rs.results', rs.results)
        this.personagens = rs.results;
      },
    })
  }
}

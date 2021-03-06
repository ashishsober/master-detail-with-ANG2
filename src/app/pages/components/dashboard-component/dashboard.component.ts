import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/interface';
import { DataService } from '../../../core/data.service';

@Component({
  moduleId: 'module.id',
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private dataService: DataService) { }
  totalCount:number;
  ngOnInit(): void {
    this.dataService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
      
    this.dataService.getUsersCount()
    .subscribe(data => {
       this.totalCount = data.count;
    })  
  }

  // public direction = "row";
  // public mainAxis = "space-around";
  // public crossAxis = "center";

  // layoutAlign () {
  //     return `${this.mainAxis} ${this.crossAxis}`;
  // }
}

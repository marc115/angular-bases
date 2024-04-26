import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She-hulk', 'Thor'];

  public deletedHero?: string;

  deleteLastHero (): void {
    this.deletedHero = this.heroes.pop();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets',
  styleUrls: ['./planets.css'],
  templateUrl: './planets.html',
})
export class PlanetsComponent {

  planetId: string | null = null;

  planets: any = {
    'alderaan': {
      name: 'Alderaan',
      description: 'Planeta zniszczona przez Gwiazdę Śmierci'
    },
    'coruscant': {
      name: 'Coruscant',
      description: 'Stolica galaktyki, planeta-miasto'
    },
    'dagobah': {
      name: 'Dagobah',
      description: 'Bagienna planeta, miejsce ukrycia Yody'
    },
    'hoth': {
      name: 'Hoth',     
      description: 'Planeta zimna, miejsce operacji Clone'
    },
    'naboo': {
      name: 'Naboo',
      description: 'Planeta o bujnej przyrodzie, miejsce pochodzenia Padmé Amidali'
    },
    'tatooine': {
      name: 'Tatooine',
      description: 'Pustynna planeta, miejsce urodzenia Lukea Skywalkera'
    } 
  };

  constructor(private route: ActivatedRoute) {
    this.planetId = this.route.snapshot.paramMap.get('id');
  }

  get planet() {
    return this.planets[this.planetId || ''];
  }
}
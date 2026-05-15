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
      description: 'Planeta zniszczona przez Gwiazdę Śmierci',
      image: '/assets/img/planets/alderaan.png',
    },
    'coruscant': {
      name: 'Coruscant',
      description: 'Stolica galaktyki, planeta-miasto',
      image: '/assets/img/planets/coruscant.png',
    },
    'dagobah': {
      name: 'Dagobah',
      description: 'Bagienna planeta, miejsce ukrycia Yody',
      image: '/assets/img/planets/dagobah.png',
    },
    'hoth': {
      name: 'Hoth',     
      description: 'Planeta zimna, miejsce operacji Clone',
      image: '/assets/img/planets/hoth.png',
    },
    'naboo': {
      name: 'Naboo',
      description: 'Planeta o bujnej przyrodzie, miejsce pochodzenia Padmé Amidali',
      image: '/assets/img/planets/naboo.png',
    },
    'tatooine': {
      name: 'Tatooine',
      description: 'Pustynna planeta, miejsce urodzenia Lukea Skywalkera',
      image: '/assets/img/planets/tatooine.png',
    } 
  };

  constructor(private route: ActivatedRoute) {
    this.planetId = this.route.snapshot.paramMap.get('id');
  }

  get planet() {
    return this.planets[this.planetId || ''];
  }
}
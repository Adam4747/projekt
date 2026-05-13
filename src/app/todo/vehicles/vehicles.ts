import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.html',
})
export class VehiclesComponent {

  vehiclesId: string | null = null;

  vehicle: any = {
    'AT-AT': {
      name: 'AT-AT',
      model: 'All Terrain Armored Transport',
      description: 'AT-AT to ogromny, czteronożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w potężne działa laserowe i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.'
    },
    'AT-ST': {
      name: 'AT-ST',
      model: 'All Terrain Scout Transport',
      description: 'AT-ST to mniejszy, dwunożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do patrolowania i wsparcia piechoty na polu bitwy.'
    },
    'Juggernaut': {
      name: 'Juggernaut',
      model: 'Juggernaut',
      description: 'Juggernaut to potężny pojazd kroczący używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w ciężkie działa i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.'
    },
    'MTT': {
      name: 'MTT',
      model: 'Multi-Troop Transport',
      description: 'MTT to duży pojazd transportowy używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do transportu dużej liczby żołnierzy na pole bitwy.'
    },
    'Sandcrawler': {
      name: 'Sandcrawler',
      model: 'Sandcrawler',
      description: 'Sandcrawler to ogromny pojazd kroczący używany przez Jawów na pustynnej planecie Tatooine. Jest wykorzystywany głównie do transportu i handlu różnymi towarami, a także do zbierania złomu i części z wraków statków kosmicznych.'
    },
    '74-Z Speeder Bike': {
      name: '74-Z Speeder Bike',
      model: '74-Z Speeder Bike',
      description: '74-Z Speeder Bike to szybki, jednoosobowy pojazd używany przez Imperium Galaktyczne. Jest wykorzystywany głównie do patrolowania i szybkiego przemieszczania się po różnych terenach, zwłaszcza w lasach Endoru.'
     }
  };

  constructor(private route: ActivatedRoute) {
    this.vehiclesId = this.route.snapshot.paramMap.get('id');
  }
   get vehicles() {
    return this.vehicle[this.vehiclesId || ''];
  }
}
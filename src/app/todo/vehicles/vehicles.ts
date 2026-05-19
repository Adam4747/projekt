import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class VehiclesComponent {

  vehicle: any;
  loading = true;
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
  'at-at': 'AT-AT to ogromny, czteronożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w potężne działa laserowe i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.',
  'at-st': 'AT-ST to mniejszy, dwunożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do patrolowania i wsparcia piechoty na polu bitwy.',
  'juggernaut': 'Juggernaut to potężny pojazd kroczący używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w ciężkie działa i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.',
  'mtt': 'MTT to duży pojazd transportowy używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do transportu dużej liczby żołnierzy na pole bitwy.',
  'sandcrawler': 'Sandcrawler to ogromny pojazd kroczący używany przez Jawów na pustynnej planecie Tatooine. Jest wykorzystywany głównie do transportu i handlu różnymi towarami, a także do zbierania złomu i części z wraków statków kosmicznych.',
  'speeder-bike': '74-Z Speeder Bike to szybki, jednoosobowy pojazd używany przez Imperium Galaktyczne. Jest wykorzystywany głównie do patrolowania i szybkiego przemieszczania się po różnych terenach, zwłaszcza w lasach Endoru.'
};

  images: Record<string, string> = {
    'at-at': '/assets/img/vehicles/at-at.png',
    'at-st': '/assets/img/vehicles/at-st.png',
    'juggernaut': '/assets/img/vehicles/juggernaut.png',
    'mtt': '/assets/img/vehicles/mtt.png',
    'sandcrawler': '/assets/img/vehicles/sandcrawler.png',
    'speeder-bike': '/assets/img/vehicles/speeder.png'
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) 
  
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.routeId = id;
    console.log(this.loading, "1");
    const map: any = {
      'at-at': 1,
      'at-st': 2,
      'juggernaut': 3,
      'mtt': 4,
      'sandcrawler': 5,
      'speeder-bike': 6
    };
    

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`http://localhost:8080/api/vehicles/${this.apiId}`)
      .subscribe(data => {
        this.vehicle = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
  
}
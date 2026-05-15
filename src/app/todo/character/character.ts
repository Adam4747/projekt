import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class CharacterComponent {

  character: any;
  loading = true; // 👈 DODANE
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
    'darth-vader': 'Darth Vader, znany wcześniej jako Anakin Skywalker...',
    'luke-skywalker': 'Luke Skywalker to centralna postać sagi...',
    'yoda': 'Yoda to legendarny Wielki Mistrz Jedi...',
    'c-3-po': 'C-3PO to droid protokolarny...',
    'han-solo': 'Han Solo to charyzmatyczny przemytnik...',
    'leia-organa': 'Leia Organa to niezłomna przywódczyni...'
  };

  images: Record<string, string> = {
    'darth-vader': '/assets/img/characters/Darth Vader.png',
    'luke-skywalker': '/assets/img/characters/Luke Skywalker.png',
    'yoda': '/assets/img/characters/yoda.png',
    'c-3-po': '/assets/img/characters/c-3po.png',
    'han-solo': '/assets/img/characters/han solo.png',
    'leia-organa': '/assets/img/characters/leia organa.png'
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.routeId = id;
    console.log(this.loading, "1");
    const map: any = {
      'darth-vader': 4,
      'luke-skywalker': 1,
      'c-3-po': 2,
      'yoda': 20,
      'han-solo': 14,
      'leia-organa': 5
    };

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`https://swapi.info/api/people/${this.apiId}`)
      .subscribe(data => {
        this.character = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false; // 👈 DODANE (TU KOŃCZY SIĘ ŁADOWANIE)
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
}
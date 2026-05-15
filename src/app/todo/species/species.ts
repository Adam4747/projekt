import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.html',
  styleUrl: './species.css',
})
export class SpeciesComponent {

  species: any;
  loading = true; 
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
  };

  images: Record<string, string> = {
    'human': '/assets/img/species/human.png',
    'ewok': '/assets/img/species/ewoki.png',
    'gungan': '/assets/img/species/gungan.png',
    'hutt': '/assets/img/species/hutt.png',
    'trandoshan': '/assets/img/species/trandoshan.png',
    'wookiee': '/assets/img/species/wookiee.png'
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
      'human': 1,
      'ewok': 9,
      'gungan': 12,
      'hutt': 5,
      'trandoshan': 7,
      'wookiee': 3
    };
    

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`https://swapi.info/api/species/${this.apiId}`)
      .subscribe(data => {
        this.species = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
  
}
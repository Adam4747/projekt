import { Component, OnInit } from '@angular/core';
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
export class SpeciesComponent implements OnInit {

  species: any = null;
  loading = true;
  stars: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      console.log("NOWE SPECIES ID:", id);

      this.loading = true;
      this.species = null;

      this.http.get(`http://localhost:8080/api/species/${id}`)
        .subscribe({
          next: (data) => {
            this.species = data;
            this.loading = false;
            this.cd.detectChanges();
          },
          error: () => {
            this.loading = false;
          }
        });
    });

    this.stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * 100,
      d: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));
  }
}
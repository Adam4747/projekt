import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class PlanetsComponent implements OnInit {

  planet: any = null;
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

      console.log("NOWE PLANET ID:", id);

      // 🔥 reset stanu przy zmianie route
      this.loading = true;
      this.planet = null;

      this.http.get(`http://localhost:8080/api/planets/${id}`)
        .subscribe({
          next: (data) => {
            this.planet = data;
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
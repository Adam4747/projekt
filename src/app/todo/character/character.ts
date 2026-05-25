import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class CharacterComponent implements OnInit {

  character: any = null;
  loading = true;
  stars: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      console.log("NOWE ID:", id);

      // 🔥 KLUCZOWE RESETOWANIE STANU
      this.loading = true;
      this.character = null;


      this.http.get(`http://localhost:8080/api/characters/${id}`)
        .subscribe({
          next: (data) => {
            this.character = data;
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
  goToMenu() {
    this.router.navigate(['/']);
  }
}
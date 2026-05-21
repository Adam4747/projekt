import { Component, OnInit } from '@angular/core';
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
  loading = true;
  apiId: number | null = null;
  routeId: string | null = null;
  stars: any[] = [];

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
      'darth-vader': 1,
      'luke-skywalker': 2,
      'c-3-po': 6,
      'yoda': 3,
      'han-solo': 4,
      'leia-organa': 5
    };
    

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`http://localhost:8080/api/characters/${this.apiId}`)
      .subscribe(data => {
        this.character = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
  ngOnInit() {
  this.stars = Array.from({ length: 120 }).map(() => ({
    x: Math.random() * 100,
    d: Math.random() * 3 + 2,
    delay: Math.random() * 5
  }));
}
}

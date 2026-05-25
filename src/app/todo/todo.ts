import {Component, ElementRef, OnInit, OnDestroy, ViewChild, HostListener} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient,  } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

interface Star {
  x: number;
  y: number;
  z: number;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit, OnDestroy {

  @ViewChild('spaceCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  // canvas
  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private numStars = 400;
  private speed = 6;
  private animationId!: number;
  private searchSubject = new Subject<string>();
  // search
  searchText: string = '';
  searchResults: any[] = [];

  // data
  characters: any[] = [];
  planets: any[] = [];
  vehicles: any[] = [];
  species: any[] = [];
  starships: any[] = [];

  openDropdown: string | null = null;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.resizeCanvas();
    this.generateStars();
    this.animate();

    this.http.get<any[]>("http://localhost:8080/api/characters")
      .subscribe(data => this.characters = data);

    this.http.get<any[]>("http://localhost:8080/api/planets")
      .subscribe(data => this.planets = data);

    this.http.get<any[]>("http://localhost:8080/api/vehicles")
      .subscribe(data => this.vehicles = data);

    this.http.get<any[]>("http://localhost:8080/api/species")
      .subscribe(data => this.species = data);

    this.http.get<any[]>("http://localhost:8080/api/spaceships")
      .subscribe(data => this.starships = data);

       this.searchSubject.pipe(
      debounceTime(300),
      switchMap(text =>
        this.http.get<any[]>(`http://localhost:8080/api/search?query=${text}`)
      )
    ).subscribe(data => {
      this.searchResults = data;
    });
  }
  

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  // ======================
  // SEARCH (ONLY BACKEND)
  // ======================
  search() {
    if (!this.searchText) {
      this.searchResults = [];
      return;
    }

    this.searchSubject.next(this.searchText);
  

    this.http.get<any[]>(`http://localhost:8080/api/search?query=${this.searchText}`)
      .subscribe({
        next: (data) => {
          this.searchResults = data;
        },
        error: (err) => {
          console.error("SEARCH ERROR:", err);
        }
      });
  }

  goToResult(item: any) {
    if (item.type === 'character') this.goToCharacter(item.id);
    if (item.type === 'planet') this.goToPlanet(item.id);
    if (item.type === 'vehicle') this.goToVehicles(item.id);
    if (item.type === 'species') this.goToSpecies(item.id);
    if (item.type === 'starship') this.goToSpaceships(item.id);
  }

  // ======================
  // NAVIGATION
  // ======================
  goToCharacter(id: number) {
    this.router.navigate(['/character', id]);
  }

  goToPlanet(id: string) {
    this.router.navigate(['/planets', id]);
  }

  goToVehicles(id: string) {
    this.router.navigate(['/vehicles', id]);
  }

  goToSpecies(id: string) {
    this.router.navigate(['/species', id]);
  }

  goToSpaceships(id: string) {
    this.router.navigate(['/spaceships', id]);
  }

  // ======================
  // DROPDOWNS
  // ======================
  toggleDropdown(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  // ======================
  // RESIZE
  // ======================
  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // ======================
  // STARFIELD
  // ======================
  private generateStars() {
    const canvas = this.canvasRef.nativeElement;
    this.stars = [];

    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width
      });
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    this.stars.forEach(star => {

      star.z -= this.speed;

      if (star.z <= 0) {
        star.z = canvas.width;
        star.x = Math.random() * canvas.width - cx;
        star.y = Math.random() * canvas.height - cy;
      }

      const px = (star.x / star.z) * canvas.width + cx;
      const py = (star.y / star.z) * canvas.height + cy;

      if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
        const size = Math.max(0.1, (1 - star.z / canvas.width) * 3);

        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(px, py, size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    this.animationId = requestAnimationFrame(this.animate);
  };
}
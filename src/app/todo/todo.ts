import { Component, ElementRef, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Star {
  x: number;
  y: number;
  z: number;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit, OnDestroy {
  // Przechwycenie elementu canvas z HTML
  @ViewChild('spaceCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private numStars = 400; // Liczba gwiazd
  private speed = 6;      // Prędkość (zwiększ dla trybu Hyperdrive)
  private animationId!: number;

  characters = [
    { id: 'darth-vader', name: 'Darth Vader' },
    { id: 'c-3-po', name: 'C-3PO' },
    { id: 'han-solo', name: 'Han Solo' },
    { id: 'leia-organa', name: 'Leia Organa' },
    { id: 'luke-skywalker', name: 'Luke Skywalker' },
    { id: 'yoda', name: 'Yoda' }
  ];

  planets = [
    { id: 'alderaan', name: 'Alderaan' },
    { id: 'coruscant', name: 'Coruscant' },
    { id: 'dagobah', name: 'Dagobah' },
    { id: 'hoth', name: 'Hoth' },
    { id: 'naboo', name: 'Naboo' },
    { id: 'tatooine', name: 'Tatooine' }
  ];

  vehicles = [
    { id: 'at-at', name: 'AT-AT' },
    { id: 'at-st', name: 'AT-ST' },
    { id: 'juggernaut', name: 'Juggernaut' },
    { id: 'mtt', name: 'MTT' },
    { id: 'sandcrawler', name: 'Sandcrawler' },
    { id: 'speeder-bike', name: '74-Z Speeder Bike' }
  ];

  species = [
    { id: 'human', name: 'Człowiek' },
    { id: 'ewok', name: 'Ewoki' },
    { id: 'gungan', name: 'Gungan' },
    { id: 'hutt', name: 'Hutt' },
    { id: 'trandoshan', name: 'Trandoshan' },
    { id: 'wookiee', name: 'Wookiee' }
  ];

  starships = [
    { id: 'arc-170', name: 'ARC-170' },
    { id: 'devastator', name: 'Devastator' },
    { id: 'death-star', name: 'Gwiazda śmierci' },
    { id: 'millennium-falcon', name: 'Sokół Millennium' },
    { id: 'tie-advanced', name: 'TIE Advanced x1' },
    { id: 'x-wing', name: 'X-wing' }
  ];

  openDropdown: string | null = null;

  constructor(private router: Router) {}

  // Odpalenie animacji po załadowaniu strony
  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    this.resizeCanvas();
    this.generateStars();
    this.animate();
  }

  // Zatrzymanie animacji po wyjściu ze strony, żeby oszczędzać procesor
  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  toggleDropdown(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  goToCharacter(id: string) {
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

  // Metody obsługujące kosmiczne tło
  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

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
    
    // Efekt smug za gwiazdami
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
        const size = (1 - star.z / canvas.width) * 3;
        
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(px, py, size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    this.animationId = requestAnimationFrame(this.animate);
  }
}
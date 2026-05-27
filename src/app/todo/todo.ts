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
  private sounds: HTMLAudioElement[] = [];
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

   playBlaster() {
  const audio = new Audio('assets/music/blaster.mp3');
  audio.volume = 0.7;

  this.sounds.push(audio); // 🔥 trzymamy referencję

  audio.play();

  audio.onended = () => {
    this.sounds = this.sounds.filter(a => a !== audio);
  };
}

playLightsaber() {
  const audio = new Audio('assets/music/lightsaber.mp3');
  audio.volume = 0.7;

  this.sounds.push(audio);

  audio.play();

  audio.onended = () => {
    this.sounds = this.sounds.filter(a => a !== audio);
  };
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


  // DROPDOWNS
  toggleDropdown(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  @HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (!target.closest('.option')) {
    this.openDropdown = null;
  }
}

  // RESIZE
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
  crawlText: string = `
Dawno dawno temu, w odległej, cyfrowej galaktyce… 

Aż na samym dnie kodu, tam gdzie grawitacja logiczna zakrzywia czas, narodziła się nowa nadzieja. Grupa śmiałych praktykantów postanowiła rzucić wyzwanie nieznanemu i opanować potężne arkana TypeScriptu oraz potęgę frameworka Angular.

Rozdział I: Pierwsze Kroki i Trening Jedi
Na początku była tylko pustka i migający kursor w terminalu. Praktykanci, niczym młodzi Padawani, musieli najpierw zrozumieć, czym jest Moc Typowania. TypeScript z początku wydawał się surowym mistrzem – nie wybaczał błędów, krzyczał czerwonymi liniami przy każdej złej próbie przypisania zmiennej i żądał absolutnej dyscypliny. Jednak z każdym dniem intensywnego kursu, z każdym przejechanym modułem i zrozumianym komponentem (@Component), młodzi programiści zaczynali dostrzegać ukrytą harmonię. Angular przestał być chaosem, a stał się potężnym sojusznikiem. Nauczyli się tworzyć serwisy, okiełznali routing i zrozumieli, jak przesyłać dane między komponentami za pomocą @Input i @Output.

Rozdział II: Wizja Wielkiego Projektu
Gdy kurs dobiegł końca, nadszedł czas próby. Praktykanci nie chcieli budować kolejnej nudnej listy zadań (To-Do List). Postanowili stworzyć coś, co odzwierciedlało ich galaktyczne ambicje – własną, epicką stronę o Star Wars.

Praca ruszyła pełną parą:

Gwiazdy w tle: Pierwszym krokiem było stworzenie klimatu. Za pomocą CSS-owej magii i sprytnych skryptów, tło ich aplikacji ożyło. Ciemna przestrzeń kosmiczna zapełniła się setkami mieniących się, hipnotyzujących gwiazd, które przesuwały się po ekranie, dając niesamowity efekt głębi.

Galeria Postaci i Opisy: Na stronę trafiły legendarne postacie – od Luke'a Skywalkera, przez Dartha Vadera, aż po urocze ewoki. Każdy bohater, pojazd, planeta, gatunek i statek koszmiczny otrzymał swoje dedykowane miejsce, piękne zdjęcie oraz wyczerpujący opis.

Interaktywne Przyciski: Strona nie mogła być martwa. Praktykanci zaprogramowali przyciski, które reagowały na kliknięcia użytkownika z prędkością światła.

Kosmiczna Muzyka: Czym byłyby Gwiezdne Wojny bez muzyki? Po wejściu na stronę, z głośników zaczęły wydobywać się potężne, orkiestrowe brzmienia, które natychmiast budowały klimat kosmicznej przygody.

Rozdział III: Ciemna Strona Mocy, czyli Backend
Prawdziwy Jedi wie jednak, że to, co widoczne dla oka (Frontend), to tylko połowa sukcesu. Prawdziwa siła tkwiła w głębi. Praktykanci wznieśli więc potężny Backend.

To tam, na bezpiecznych serwerach, ukryli całe archiwum swojej rebelii. Wszystkie zdjęcia, opisy planet, statków kosmicznych i parametry bohaterów zostały uporządkowane i zabezpieczone. Za pomocą Angularowego HttpClient i magii ReactiveX (RxJS), frontend wysyłał zapytania w nadprzestrzeń, a backend błyskawicznie odpowiadał, karmiąc stronę potrzebnymi danymi. Nic nie działo się z przypadku – wszystko działało jak idealnie naoliwiony mechanizm gwiezdnego niszczyciela.

Epilog: Sukces w Cyfrowej Galaktyce
I tak, po dniach (i nocach) kodowania, kompilowania i debugowania, misja zakończyła się pełnym sukcesem. Strona została ukończona.

Gdy po raz pierwszy odpalili wersję produkcyjną, a na ekranie, na tle migoczących gwiazd, pojawiła się potężna dawka wiedzy o Star Wars okraszona muzyką, praktykanci wiedzieli, że zdali egzamin. Nie byli już tylko zagubionymi adeptami. Stali się prawdziwymi Rycerzami Angulara, gotowymi na kolejne wyzwania w niezmierzonym uniwersum web developmentu.

Moc TypeScriptu pozostała z nimi na zawsze.
`;
}
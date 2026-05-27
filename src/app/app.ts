import { Component, OnInit, signal, HostListener, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('moj-projekt');

  ngOnInit() {
  document.addEventListener('click', this.startMusicOnce);
    this.glow = document.querySelector('.cursor-glow') as HTMLElement;

}

startMusicOnce = () => {
  const audio = document.getElementById('bg-music') as HTMLAudioElement;

  if (audio) {
    audio.volume = 0.3;
    audio.play();
  }

  document.removeEventListener('click', this.startMusicOnce);
}

  startMusic() {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;

    if (audio) {
      audio.volume = 0.3;
      audio.play();
    }
  }
  @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  if (this.glow) {
 const offsetX = 16;
const offsetY = 16;

this.glow.style.left = event.clientX + 'px';
this.glow.style.top = event.clientY + 'px';
  }
}
private glow!: HTMLElement;
}
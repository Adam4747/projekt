import { Component, OnInit, signal } from '@angular/core';
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
}
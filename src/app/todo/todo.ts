import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {constructor(private router: Router) {}

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
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const dropdown = button.nextElementSibling as HTMLElement;

      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== dropdown) {
          (d as HTMLElement).style.display = "none";
        }
      });

      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  });

  // Zamknij dropdown przy kliknięciu poza menu
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target && !target.closest(".option")) {
      document.querySelectorAll(".dropdown").forEach(d => {
        (d as HTMLElement).style.display = "none";
      });
    }
  });
});



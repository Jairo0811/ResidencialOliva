import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  values = [
    {
      icon: 'bi-house-heart-fill',
      title: 'Comodidad',
      text: 'Apartamentos completamente equipados para que te sientas como en casa.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Seguridad',
      text: 'Entorno residencial tranquilo y pensado para una estadía sin preocupaciones.'
    },
    {
      icon: 'bi-emoji-smile',
      title: 'Atención',
      text: 'Nos enfocamos en brindar un servicio cercano y personalizado.'
    }
  ];

}
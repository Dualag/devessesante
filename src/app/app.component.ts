import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Leïla DEVESSE (LD Juris)';
  description ='Facilitez votre quotidien en confiant vos formalités juridiques !';
  pp = 'https://media.licdn.com/dms/image/v2/D4E03AQHk8CE315rn3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696840332649?e=1735776000&v=beta&t=cxdnpJlulntGt93m9uZ2Yf_l9nQ0KmqRktgA8wJeFSQ';
  bkg = 'https://media.licdn.com/dms/image/v2/D4E16AQHaWjMqvYdstQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1706205551729?e=1735776000&v=beta&t=f4SN-yfPkj2VOdGlqZgcLauwf6fZG3nYokhjG2C3Q2s';
}

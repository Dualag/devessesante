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
  pp = '/assets/ppLinkedIn.jpg';
  bkg = '/assets/bkgLinkedIn.jpg';
}

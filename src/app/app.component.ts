import { Component } from '@angular/core';
import { IExercice } from './interfaces/exercice';
import { EXERCICES } from '../assets/exercices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'duocoding';

  public exercices: IExercice[] = EXERCICES;
}

import { Component, Input, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { IExercice } from 'src/app/interfaces/exercice';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  @Input()
  public exercices: IExercice[] = [];

  public exerciceSelected: IExercice;

  ngOnInit(): void {
    this.exerciceSelected = arrayShuffle(this.exercices)[0];
  }
}

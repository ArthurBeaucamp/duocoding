import { Component, Input, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { IMultiChoice } from 'src/app/interfaces/exercice';

@Component({
  selector: 'app-pratice-multichoice',
  templateUrl: './pratice-multichoice.component.html',
  styleUrls: ['./pratice-multichoice.component.scss'],
})
export class PraticeMultichoiceComponent implements OnInit {
  @Input()
  public multiChoice: IMultiChoice[] = [];

  public multiChoiceRandomize: IMultiChoice[] = [];

  ngOnInit(): void {
    this.multiChoiceRandomize = arrayShuffle(this.multiChoice);
  }
}

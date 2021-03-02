import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IExercice } from 'src/app/interfaces/exercice';

import { PracticeComponent } from './practice.component';

const EXERCICE: IExercice = {
  instruction: '',
  code: '',
};

describe('PracticeComponent', (): void => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [PracticeComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should not display practice', (): void => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.practiceContainer')
    ).toBeFalsy();
  });

  it('should display practice', (): void => {
    component.exercices = [EXERCICE];
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.practiceContainer')
    ).toBeTruthy();
  });

  it('should not display multiChoice component', (): void => {
    component.exercices = [EXERCICE];
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('app-pratice-multichoice')
    ).toBeFalsy();
  });

  it('should display multiChoice component', (): void => {
    component.exercices = [
      {
        ...EXERCICE,
        multiChoice: [{ label: '', isGoodResponse: true }],
      },
    ];
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('app-pratice-multichoice')
    ).toBeTruthy();
  });
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PraticeMultichoiceComponent } from './pratice-multichoice.component';

describe('PraticeMultichoiceComponent', (): void => {
  let component: PraticeMultichoiceComponent;
  let fixture: ComponentFixture<PraticeMultichoiceComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [PraticeMultichoiceComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(PraticeMultichoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should not display choices', (): void => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.multichoiceContainer')
    ).toBeFalsy();
  });

  it('should display choices', (): void => {
    component.multiChoice = [{ label: '', isGoodResponse: true }];
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.multichoiceContainer')
    ).toBeTruthy();
  });

  it('should display all choices', (): void => {
    component.multiChoice = [
      { label: '1', isGoodResponse: true },
      { label: '2', isGoodResponse: false },
      { label: '3', isGoodResponse: false },
    ];
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('.choiceButton')).length
    ).toEqual(3);
  });
});

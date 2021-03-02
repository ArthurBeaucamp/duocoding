export interface IExercice {
  instruction: string;
  code: string;
  multiChoice?: IMultiChoice[];
}

export interface IMultiChoice {
  label: string;
  isGoodResponse: boolean;
}

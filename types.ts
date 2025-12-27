
export interface Option {
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface AssessmentResult {
  score: number;
  title: string;
  description: string;
  color: string;
}

export type AppState = 'START' | 'QUIZ' | 'RESULT' | 'ADVICE';

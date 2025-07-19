export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  chapter: string;
  sections: string[];
  questions: Question[];
  isParent?: boolean;
  children?: Quiz[];
}
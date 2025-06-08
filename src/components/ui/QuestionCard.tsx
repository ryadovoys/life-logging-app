import React from 'react';
import { Button } from './Button';

interface QuestionCardProps {
  question: string;
  onYes?: () => void;
  onNo?: () => void;
  onSkip?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onYes,
  onNo,
  onSkip,
}) => {
  return (
    <div className="bg-[#d9f0ff] rounded-lg border border-gray-40 mx-4">
      <div className="px-4 pt-6 pb-3">
        <p className="font-instrument font-semibold text-body text-black text-center">
          {question}
        </p>
      </div>
      
      <div className="flex gap-3 px-4 py-3">
        <Button variant="secondary" className="flex-1" onClick={onNo}>
          No
        </Button>
        <Button variant="secondary" className="flex-1" onClick={onYes}>
          Yes
        </Button>
      </div>
      
      <div className="px-4 pb-4">
        <button
          onClick={onSkip}
          className="w-full font-instrument font-normal text-body-small text-gray-80 hover:text-black transition-colors underline"
        >
          Skip to the next one
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { LegacyButton as Button } from './Button';

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
    <div className="bg-[#d9f0ff] rounded-lg mx-md">
      <div className="px-md pt-lg pb-sm">
        <p className="font-instrument font-semibold text-body text-black text-center">
          {question}
        </p>
      </div>
      
      <div className="flex gap-sm px-md py-sm">
        <Button variant="secondary" className="flex-1" onClick={onNo}>
          No
        </Button>
        <Button variant="secondary" className="flex-1" onClick={onYes}>
          Yes
        </Button>
      </div>
      
      <div className="px-md pb-md">
        <button
          onClick={onSkip}
          className="w-full font-instrument font-normal text-caption text-gray-80 hover:text-black transition-colors underline"
        >
          Skip to the next one
        </button>
      </div>
    </div>
  );
};
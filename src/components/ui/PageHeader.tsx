import React from 'react';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  onAdd?: () => void;
  showBackButton?: boolean;
  showAddButton?: boolean;
  showMenu?: boolean;
  emoji?: string;
  emojiBackgroundColor?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBack,
  onAdd,
  showBackButton = true,
  showAddButton = true,
  showMenu = false,
  emoji,
  emojiBackgroundColor = '#d9f0ff',
}) => {
  const hasEmojiBox = emoji && emoji !== '';
  
  return (
    <div className="sticky top-0 bg-white z-10 px-4 pt-6 pb-1 border-b border-gray-40">
      <div className="flex items-center justify-between">
        {showBackButton ? (
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="w-10 h-10" />
        )}
        
        <div className="flex items-center gap-3 flex-1 justify-center">
          {hasEmojiBox && (
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
              style={{ 
                backgroundColor: emojiBackgroundColor,
                fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}
            >
              {emoji}
            </div>
          )}
          <h1 className="font-instrument font-semibold text-body-large text-black text-center">
            {hasEmojiBox ? title.replace(/^🏄‍♂️\s*/, '') : title}
          </h1>
        </div>
        
        {showAddButton ? (
          <button 
            onClick={onAdd}
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        ) : showMenu ? (
          <button className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
            </svg>
          </button>
        ) : (
          <div className="w-10 h-10" />
        )}
      </div>
    </div>
  );
};
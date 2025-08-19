import React, { useRef, useEffect, useState } from 'react';
import type { MyDiarySectionProps } from '../../types/MyRecord';
import './MyDiarySection.css';

const MyDiarySection: React.FC<MyDiarySectionProps> = ({ diaryEntries }) => {
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [truncatedContents, setTruncatedContents] = useState<string[]>([]);

  useEffect(() => {
    const truncateText = () => {
      entryRefs.current.forEach((entryRef, index) => {
        if (entryRef && diaryEntries[index]) {
          const dateTimeSection = entryRef.querySelector('.date-time-section') as HTMLElement;
          const contentElement = entryRef.querySelector('.diary-content') as HTMLElement;
          
          if (dateTimeSection && contentElement) {
            // Calculate available height: total height - date/time height - padding - space for ellipsis
            const totalHeight = entryRef.offsetHeight;
            const dateTimeHeight = dateTimeSection.offsetHeight;
            const padding = 16; // Account for padding
            const ellipsisSpace = 20; // Space for ellipsis
            
            const availableHeight = totalHeight - dateTimeHeight - padding - ellipsisSpace;
            
            if (availableHeight <= 0) {
              // If no space available, set empty content
              setTruncatedContents(prev => {
                const newContents = [...prev];
                newContents[index] = '...';
                return newContents;
              });
              return;
            }
            
            const originalContent = diaryEntries[index].content;
            
            // Create temporary element to measure text height
            const tempElement = document.createElement('div');
            tempElement.style.cssText = `
              position: absolute;
              visibility: hidden;
              width: ${contentElement.offsetWidth}px;
              line-height: 1.2;
              font-size: ${getComputedStyle(contentElement).fontSize};
              font-family: ${getComputedStyle(contentElement).fontFamily};
              padding: 0;
              margin: 0;
              border: none;
              outline: none;
            `;
            
            // Start with original content
            let truncatedContent = originalContent;
            let currentHeight = 0;
            
            // Measure initial height
            tempElement.innerHTML = truncatedContent.replace(/\n/g, '<br />');
            document.body.appendChild(tempElement);
            currentHeight = tempElement.offsetHeight;
            
            // Binary search for optimal truncation
            let minLength = 0;
            let maxLength = originalContent.length;
            
            while (minLength < maxLength) {
              const midLength = Math.floor((minLength + maxLength + 1) / 2);
              truncatedContent = originalContent.slice(0, midLength);
              
              tempElement.innerHTML = truncatedContent.replace(/\n/g, '<br />');
              currentHeight = tempElement.offsetHeight;
              
              if (currentHeight <= availableHeight) {
                minLength = midLength;
              } else {
                maxLength = midLength - 1;
              }
            }
            
            // Clean up temp element
            document.body.removeChild(tempElement);
            
            // Get final truncated content
            truncatedContent = originalContent.slice(0, minLength);
            
            // Add ellipsis if content was truncated
            if (truncatedContent.length < originalContent.length) {
              truncatedContent += '...';
            }
            
            setTruncatedContents(prev => {
              const newContents = [...prev];
              newContents[index] = truncatedContent;
              return newContents;
            });
          }
        }
      });
    };

    // Initial truncation with delay to ensure DOM is ready
    const timer = setTimeout(truncateText, 100);
    
    // Recalculate on window resize
    window.addEventListener('resize', truncateText);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', truncateText);
    };
  }, [diaryEntries]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[48px] w-full mb-8 sm:mb-12 lg:mb-[56px]">
      {/* Diary Container - Same width as Main Cards */}
      <div className="flex flex-col justify-start items-center w-full">
        <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold leading-[22px] sm:leading-[25px] lg:leading-[27px] text-left text-gray-800 mb-6 sm:mb-8 lg:mb-[34px] self-start w-full">
          MY DIARY
        </h2>

        <div className="flex flex-row justify-start items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {diaryEntries.map((entry, index) => (
              <div 
                key={entry.id} 
                ref={(el: HTMLDivElement | null) => { entryRefs.current[index] = el; }}
                className="diary-entry flex flex-col gap-2 justify-start items-start w-full border-2 border-[#707070] bg-white p-3 sm:p-4 lg:p-[16px_14px] rounded aspect-square"
              >
                <div className="date-time-section flex flex-col gap-1 justify-start items-start w-full">
                  <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[22px] text-left text-gray-800">
                    {entry.date}
                  </span>
                  <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-left text-gray-600">
                    {entry.time}
                  </span>
                </div>
                <p 
                  className="text-[10px] sm:text-[11px] lg:text-[12px] font-light text-left text-gray-500 w-full diary-content"
                  dangerouslySetInnerHTML={{ 
                    __html: (truncatedContents[index] || entry.content).replace(/\n/g, '<br />') 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDiarySection;

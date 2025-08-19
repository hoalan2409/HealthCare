import React from 'react';
import type { MyExerciseSectionProps } from '../../types/MyRecord';
import './MyExerciseSection.css';

const MyExerciseSection: React.FC<MyExerciseSectionProps> = ({ exerciseData }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center w-full">
        {/* Exercise Container - Same width as Main Cards */}
        <div className="flex flex-col justify-start items-center w-full bg-global-1 p-4 sm:p-6 lg:p-[16px]">
          <div className="flex flex-col justify-start items-center w-full mx-2 sm:mx-4 lg:mx-[8px]">
            <div className="flex flex-row justify-start items-start w-full mb-4 sm:mb-6 lg:mb-[22px]">
              <span className="text-[12px] sm:text-[14px] lg:text-[15px] font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-left text-white align-middle w-[15%] sm:w-[12%] lg:w-[10%]">
                MY EXERCISE
              </span>
              <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[27px] text-left text-white">
                2021.05.21
              </span>
            </div>

            {/* Exercise List */}
            <div className="max-h-[200px] sm:max-h-[230px] lg:max-h-[264px] overflow-y-auto w-full pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 w-full">
                {exerciseData.map((exercise) => (
                  <div key={exercise.id} className="flex flex-row justify-start items-start w-full">
                    <div className="flex flex-row justify-start items-start w-full mr-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2" />
                      <div className="flex flex-col justify-start items-start w-full">
                        <span className="text-[11px] sm:text-[12px] lg:text-[14px] font-light leading-[18px] sm:leading-[20px] lg:leading-[21px] text-left text-white">
                          {exercise.name}
                        </span>
                        <span className="text-[11px] sm:text-[12px] lg:text-[14px] font-light leading-[18px] sm:leading-[20px] lg:leading-[21px] text-left text-yellow-400">
                          {exercise.duration}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-[12px] lg:text-[14px] font-light leading-[18px] sm:leading-[20px] lg:leading-[21px] text-left text-yellow-400 ml-auto">
                      {exercise.calories}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExerciseSection;

import React from 'react';
import type { MyExerciseSectionProps } from '../../types/MyRecord';
import './MyExerciseSection.css';

const MyExerciseSection: React.FC<MyExerciseSectionProps> = ({ exerciseData }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[48px] w-full mb-8 sm:mb-12 lg:mb-[56px]">
      {/* Exercise Container - Same width as Main Cards */}
      <div className="flex flex-col justify-start items-center w-full">
        <div className="flex flex-row justify-center items-center w-full bg-global-1 p-4 sm:p-6 lg:p-[16px]">
          <div className="flex flex-col gap-1 justify-start items-center w-full mx-2 sm:mx-4 lg:mx-[8px]">
            <div className="flex flex-row justify-start items-start w-full">
              <span className="text-[12px] sm:text-[14px] lg:text-[15px] font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-left text-white align-middle w-[15%] sm:w-[12%] lg:w-[10%]">
                MY EXERCISE
              </span>
              <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[27px] text-left text-white">
                2021.05.21
              </span>
            </div>

            <div className="flex flex-row gap-6 sm:gap-8 lg:gap-[32px] justify-start items-center w-full mt-3 sm:mt-4 lg:mt-[24px]">
              {/* Scrollable container for entire exercise list */}
              <div className="max-h-[200px] sm:max-h-[230px] lg:max-h-[264px] overflow-y-auto w-full pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 w-full">
                  {exerciseData.map((exercise, index) => (
                    <div key={exercise.id} className="flex flex-col justify-start items-start w-full">
                      <div className="flex flex-row justify-start items-center w-full mr-2">
                        <div className="flex flex-row justify-start items-center flex-1">
                          {/* Bullet point - Small white circle */}
                          <div className="w-[6px] h-[6px] bg-white rounded-full mr-2"></div>
                          <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-[19px] sm:leading-[21px] lg:leading-[22px] text-left text-white w-[56%]">
                            {exercise.name}
                          </span>
                        </div>
                        <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[20px] sm:leading-[21px] lg:leading-[22px] text-right text-yellow-400">
                          {exercise.duration}
                        </span>
                      </div>
                      <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-normal leading-[17px] sm:leading-[18px] lg:leading-[19px] text-left text-yellow-400 mt-[-2px] ml-4">
                        {exercise.calories}
                      </span>
                      <div className="w-full h-[1px] bg-gray-400 mt-1 sm:mt-2 lg:mt-[12px]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExerciseSection;

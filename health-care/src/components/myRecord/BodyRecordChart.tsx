import React from 'react';
import type { BodyRecordChartProps } from '../../types/MyRecord';

const BodyRecordChart: React.FC<BodyRecordChartProps> = ({ 
  periods, 
  onPeriodChange 
}) => {
  return (
    <div className="flex flex-col justify-start items-center w-full mb-8 sm:mb-12 lg:mb-[56px]">
      {/* Chart Container - Same width as Main Cards */}
      <div className="flex flex-col justify-start items-center w-full bg-global-1 p-4 sm:p-6 lg:p-[16px]">
        <div className="flex flex-col justify-start items-center w-full mx-2 sm:mx-4 lg:mx-[8px]">
          <div className="flex flex-row justify-start items-start w-full mb-4 sm:mb-6 lg:mb-[22px]">
            <span className="text-[12px] sm:text-[14px] lg:text-[15px] font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-left text-white align-middle w-[15%] sm:w-[12%] lg:w-[10%]">
              BODY RECORD
            </span>
            <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[27px] text-left text-white">
              2021.05.21
            </span>
          </div>

          {/* Chart Image */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px] justify-center items-center w-full mt-4 sm:mt-6 lg:mt-[22px] mx-4 sm:mx-6 lg:mx-[22px]">
            <div className="flex flex-row justify-center items-center w-full mb-2">
              <div className="w-full h-[200px] sm:h-[250px] lg:h-[304px]">
                <img 
                  src="/images/top_right.png" 
                  className="w-full h-full object-contain"
                  alt="Body Record Chart"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center w-full mt-[-2px] mx-2 sm:mx-4 lg:mx-[8px]">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => onPeriodChange(period)}
                className={`flex flex-row justify-center items-center w-[14%] sm:w-[10%] lg:w-[6%] px-4 sm:px-6 lg:px-[20px] py-1 rounded-[10px] ${
                  period === '年' 
                    ? 'bg-yellow-400' 
                    : 'bg-white'
                } ${period !== '日' ? 'ml-4' : ''}`}
              >
                <span className={`text-[11px] sm:text-[12px] lg:text-[14px] font-light leading-[18px] sm:leading-[20px] lg:leading-[21px] text-center ${
                  period === '年' ? 'text-white' : 'text-global-2'
                }`}>
                  {period}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyRecordChart;

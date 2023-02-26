import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function InterActionCard({ needOpenBtn }: { needOpenBtn: boolean }) {
  const [isPullOut, setIsPullOut] = useState(false);
  const imageUrl = '/성택미모티콘.png';
  useEffect(() => {
    if (!needOpenBtn) {
      const pullOut = setTimeout(() => {
        setIsPullOut(true);
      }, 300);
      return () => clearTimeout(pullOut);
    }
  }, [isPullOut, needOpenBtn]);

  return (
    <div className="w-full h-full px-5 pt-[44px] pb-[66px]">
      <div className="w-full h-full bg-white rounded-[10px] relative flex justify-center">
        <div className="w-[250px] h-[120px] bg-white mt-[260px] absolute z-0"></div>
        <div className="mt-[260px] w-0 h-0 border-solid border-t-transparent border-x-gray-500 border-b-gray-500 border-y-[60px] border-x-[125px] absolute z-20"></div>
        <div className="mt-[35px] w-0 h-0 border-solid border-t-transparent border-x-transparent border-b-gray-700 border-b-[100px] border-t-[125px] border-x-[125px] animate-[envelope_500ms_linear] origin-bottom absolute"></div>
        {isPullOut && (
          <div
            className={`w-[280px] h-[260px] mt-[120px] flex justify-center items-center border border-solid border-[#FDC7D4] bg-white animate-[pull-out_1000ms_linear] z-20 rounded-[10px]
                }`}
          >
            <Image src={imageUrl} alt="image" width="300" height="300" />
          </div>
        )}
      </div>
    </div>
  );
}

import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function InterActionCard({
  needOpenBtn,
  imageName,
  setIsAnimationOver,
}: {
  needOpenBtn: boolean;
  imageName: string;
  setIsAnimationOver?: Dispatch<SetStateAction<boolean>>;
}) {
  const [isPullOut, setIsPullOut] = useState(false);
  const [isOpenBtn, setIsOpenBtn] = useState(false);

  useEffect(() => {
    if (!needOpenBtn) {
      const pullOut = setTimeout(() => {
        setIsPullOut(true);
      }, 500);
      return () => clearTimeout(pullOut);
    }
  }, [isPullOut, needOpenBtn]);

  useEffect(() => {
    if (needOpenBtn) {
      setIsOpenBtn(true);
    }
  }, [needOpenBtn]);

  const handleClickOpenBtn = () => {
    setIsOpenBtn(false);

    const pullOut = () => setIsPullOut(true);
    setTimeout(pullOut, 500);

    if (setIsAnimationOver) {
      const animation = () => setIsAnimationOver(true);
      setTimeout(animation, 2200);
    }
  };

  return (
    <div className="w-full h-full px-5 pt-[44px] pb-[66px]">
      <div className="w-full h-full bg-white rounded-[10px] relative flex justify-center">
        <div className="w-[250px] h-[120px] bg-white mt-[260px] absolute z-0"></div>
        <div className="mt-[260px] absolute z-20 flex justify-center">
          <Image src="/envelopeLower.svg" alt="evelopeLower" width={254} height={120} />
          {isOpenBtn && (
            <button
              onClick={handleClickOpenBtn}
              className="w-[138px] h-10 absolute bottom-8 bg-[#FFFFFF] rounded-[55px] border border-solid border-[#EDEDED] cursor-pointer"
            >
              초대장 열기
            </button>
          )}
        </div>
        <div
          className={`mt-[180px] absolute z-10 origin-bottom ${
            !isOpenBtn ? 'animate-[envelope_500ms_linear]' : 'rotate-180'
          }`}
        >
          <Image src="/envelopeTop.svg" alt="evelopeLower" width={258} height={80} />
        </div>

        {isPullOut && (
          <div
            className={`w-[280px] h-[260px] mt-[120px] flex justify-center items-center border border-solid border-[#FDC7D4] bg-white animate-[pull-out_1500ms] ease-in-out z-20 rounded-[10px]
                }`}
          >
            <Image src={imageName} alt="image" width="300" height="300" />
          </div>
        )}
      </div>
    </div>
  );
}

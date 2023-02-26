import InterActionCard from '@/src/components/InterActionCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { copyLink } from '../api/share';

export default function InviTationComplete() {
  const [isAnimationOver, setIsAnimationOver] = useState(false);
  const router = useRouter();

  const imageName = '/성택미모티콘.png';

  useEffect(() => {
    const animation = setTimeout(() => {
      setIsAnimationOver(true);
    }, 2000);
    return () => clearTimeout(animation);
  }, [isAnimationOver]);

  const handleClickShareBtn = () => {
    copyLink(imageName);
  };

  const handleClickRewriteBtn = () => {
    router.push('/');
  };

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {isAnimationOver ? (
        <div className="w-full h-full">
          <div className="px-5 pt-[44px]">
            <section id="card">
              <div className="relative w-[320px] h-[300px] mt-[66px] flex justify-center items-center border border-solid border-pink-200 bg-white z-20 rounded-[10px]">
                <div className="absolute top-[-20px] bg-[#FEEFF4] w-[240px] h-[40px] flex justify-center items-center rounded-[10px] border border-solid border-[#FFC9D4]">
                  벚꽃 초대장
                </div>
                <Image src={imageName} alt="image" width="300" height="300" />
              </div>
            </section>
            <section id="shareBtn" className="w-full flex justify-between mt-4">
              <button
                onClick={handleClickShareBtn}
                className="bg-btn-yellow h-[50px] grow-0 w-full rounded-[10px] border border-solid border-white cursor-pointer"
              >
                <p>편지 보내기</p>
              </button>
              <button
                onClick={handleClickRewriteBtn}
                className="bg-btn-yellow ml-[15px] w-full grow-0 h-[50px] rounded-[10px] border border-solid border-white cursor-pointer"
              >
                <p>다시 작성하기</p>
              </button>
            </section>
          </div>
          <section
            id="footerBtn"
            className="absolute bottom-0 w-full h-[48px] bg-[#AFE6AD] flex justify-center cursor-pointer"
          >
            <button>내 앨범에 담기</button>
          </section>
        </div>
      ) : (
        <InterActionCard needOpenBtn={false} imageName={imageName} />
      )}
    </div>
  );
}

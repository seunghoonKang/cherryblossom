import React, { useEffect, useState } from 'react';
import { copyLink } from '@/pages/api/share';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ToastMessage from '@/src/components/ToastMessage';
import Script from 'next/script';
import { MESSAGE } from '../constants/message';

type propsType = {
  type: 'complete' | 'receive';
  imageUrl: string | undefined;
  imageName: string;
};

export default function CompleteLayout({ type, imageUrl, imageName }: propsType) {
  const [popToastMsg, setPopToastMsg] = useState(false);
  const [toastType, setToastType] = useState<'copy' | 'save'>('copy');
  const [checkClickedBtn, setCheckClickedBtn] = useState({ copy: false, save: false });
  const router = useRouter();
  const innerHeight = window.innerHeight;

  const handleClickShareBtn = () => {
    setToastType('copy');
    if (imageName) copyLink(imageName, setPopToastMsg, setCheckClickedBtn);
  };

  const handleClickRewriteBtn = () => {
    if (type === 'complete') {
      router.push('/creation');
    } else {
      router.push('/intro');
    }
  };

  const kakaoInit = () => {
    if (!window.Kakao.isInitialized(process.env.NEXT_PUBLIC_KAKAO_KEY)) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  };

  const shareKakao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 91057,
      templateArgs: {
        imageName: `${imageName}`,
      },
    });
  };

  const handleQuestionClick = () => {
    setPopToastMsg(true);
    setToastType('save');
  };

  return (
    <div className="h-full w-full">
      <div
        className={`${
          innerHeight > 700 ? 'pt-[35%]' : 'pt-[44px]'
        } flex flex-col justify-center px-5`}
      >
        <Script
          strategy="afterInteractive"
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js "
          onLoad={kakaoInit}
        />
        <ToastMessage
          popToastMsg={popToastMsg}
          setPopToastMsg={setPopToastMsg}
          image={toastType === 'copy' ? '/mail_icon.svg' : '/photo_icon.svg'}
          message={toastType === 'copy' ? MESSAGE.copy : MESSAGE.save}
        />
        <div onClick={handleQuestionClick} className="absolute top-[20px] right-[20px]">
          <Image src={'/question_mark.svg'} alt="question_mark" width={24} height={24} />
        </div>
        <section id="card" className="relative flex justify-center">
          <div className="absolute top-[44px] z-30 flex h-[40px] w-[240px] items-center justify-center rounded-[10px] border-[3px] border-solid border-[#FFC9D4] bg-[#FEEFF4] shadow-blossom-pink drop-shadow-pageTitle">
            벚꽃 초대장
          </div>
          <div className="relative z-20 mt-[66px] flex h-[300px] w-[320px] items-center justify-center overflow-hidden rounded-[8px] bg-white shadow-md">
            <div className="relative h-full w-full">
              {imageUrl !== undefined && <Image src={imageUrl} alt="image" fill />}
            </div>
          </div>
        </section>

        {type === 'complete' ? (
          <section id="middleBtn" className="mt-4 flex w-full justify-center">
            <div className="flex w-full max-w-[320px] justify-between">
              <button
                onClick={handleClickShareBtn}
                className={`${
                  !checkClickedBtn.copy ? 'bg-btn-yellow' : 'bg-[#AFE6AD]'
                } h-[50px] w-full grow-0 cursor-pointer rounded-[10px] border border-solid border-white`}
              >
                <p>편지 보내기</p>
              </button>
              <button
                onClick={handleClickRewriteBtn}
                className={`ml-[15px] h-[50px] w-full grow-0 cursor-pointer rounded-[10px] border border-solid border-white bg-btn-yellow`}
              >
                <p>다시 작성하기</p>
              </button>
            </div>
          </section>
        ) : (
          <section id="middleBtn" className="mt-4 flex w-full justify-between">
            <button
              onClick={handleClickRewriteBtn}
              className="h-[50px] w-full grow-0 cursor-pointer rounded-[10px] border border-solid border-white bg-btn-yellow"
            >
              <p>나도 초대장 만들어보기</p>
            </button>
          </section>
        )}
      </div>
      <section
        id="footerBtn"
        className={`${
          innerHeight > 700 ? 'relative mt-10 block' : 'absolute bottom-0'
        } flex w-full justify-center `}
      >
        <button
          onClick={shareKakao}
          id="kakaotalk-sharing-btn"
          className={`${
            innerHeight > 700 ? 'max-w-[320px]' : 'w-full'
          } h-[48px] w-full cursor-pointer bg-[#FDE300] font-pretendard text-[19px] font-bold text-[#131210]`}
        >
          카카오톡 공유하기
        </button>
      </section>
    </div>
  );
}

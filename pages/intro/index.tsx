import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

function Intro() {
  const router = useRouter();
  const movePage = () => {
    router.push('/');
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mt-20 relative">
        {/* 테스트 이미지입니다 */}
        <Image src="/testImage.jpg" alt="test" width={320} height={420} />
        <p className="absolute left-1/2 top-2/3 translate-y-[-50%] translate-x-[-50%] w-fit">
          나만의 초대장을 만들어 <br />
          친구랑 벚꽃 보러 갈까요?
        </p>
      </div>
      <button className="rounded-3xl bg-zinc-300 mt-4 w-80 h-12" onClick={movePage}>
        초대장 만들러 가기
      </button>
    </div>
  );
}

export default Intro;

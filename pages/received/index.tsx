import InterActionCard from '@/src/components/InterActionCard';
import ToastMessage from '@/src/components/ToastMessage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PhotoIcon from '@/public/photo_icon.svg'
import Test from '@/public/introBg.svg'

function Received() {
  const router = useRouter();
  const moveIntroPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/intro');
  };
  const [popToastMsg, setPopToastMsg] = useState(false);
  const [isAnimationOver, setIsAnimationOver] = useState(false);

  return (
    
    <div className="flex flex-col justify-between items-center w-full h-full">
      {isAnimationOver ? (
        <>
          <div className="mt-[108px] flex flex-col justify-center items-center">
            <div style={{borderBottomWidth : '6px',borderRightWidth : '4px',borderLeftWidth : '4px' }} className='absolute top-[88px] w-[240px] h-[40px] shadow-2xl flex justify-center items-center rounded-[10px] border-solid border-[3px] bg-blossom-lightPink border-blossom-pink z-20'>
              <p className='text-xl'>벚꽃 초대장</p>
            </div>
            <div className='w-[320px] h-[300px] min-w-[320px] min-h-[300px]'>
              <Image width={320} height={300} src={Test} alt="test" />  
            </div>
            <button
              className="bg-btn-yellow rounded-[10px] border border-solid border-white cursor-pointe mt-4 w-80 h-12 z-20"
              onClick={moveIntroPage}
              >
              나도 초대장 만들어 보기
            </button>
          </div>
          <div className="flex items-center justify-center w-full bg-[#AFE6AD] ">
            <button className="w-full h-12 " onClick={() => setPopToastMsg(true)}>
              내 앨범에 담기
            </button>
          </div>
          {popToastMsg &&
          <ToastMessage
          image={PhotoIcon}
          popToastMsg={popToastMsg}
          setPopToastMsg={setPopToastMsg}
          message="초대장이 앨범에 담겼습니다."
          />
          }
        </>)
      : (
        <div onClick={() => setIsAnimationOver(true)}>
          <InterActionCard needOpenBtn={true} />
        </div>
        )}
    </div>
  );
}

export default Received;

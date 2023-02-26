import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '@/public/introLogo.svg'
import Bg from '@/public/introBg.svg'

function Intro() {
  const router = useRouter();
  const movePage = () => {
    router.push('/');
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mt-20 relative">
        {/* 테스트 이미지들입니다 */}
        <div className='min-w-[320px] min-h-[420px]  flex justify-center items-center'>
          <Image src={Bg} alt="testBg" fill className='rounded-xl' />
        </div>
        <Image src={Logo} alt="testLogo" className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] animate-fade-in' width={300} height={0}/>

      </div>
      <button className="w-80 h-12 bg-blossom-green border-[3px] border-blossom-white border-solid rounded-xl  mt-4 " onClick={movePage}>
        초대장 만들러 가기
      </button>
    </div>
  );
}

export default Intro;

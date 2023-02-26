import { useRouter } from 'next/router';
import Image from 'next/image';
import TestLogo from '@/public/testIntroLogo.png'
import TestBg from '@/public/testIntroBg.png'

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
          <Image src={TestBg} alt="testBg" fill className='border-[3px] border-blossom-darkGray border-solid rounded-xl' />
        </div>
        <Image src={TestLogo} alt="testLogo" className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] animate-fade-in' width={300} height={0}/>

        {/* 글자가 필요하면 사용, 없으면 삭제예정 */}
        {/* <p className="absolute left-1/2 top-1/3 translate-y-[-50%] translate-x-[-50%] w-fit">
          나만의 초대장을 만들어 <br />
          친구랑 벚꽃 보러 갈까요?
        </p> */}

      </div>
      <button className="w-80 h-12 bg-blossom-green border-[3px] border-blossom-white border-solid rounded-xl  mt-4 " onClick={movePage}>
        초대장 만들러 가기
      </button>
    </div>
  );
}

export default Intro;

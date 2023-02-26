import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '@/public/introLogo.svg'
import Bg from '@/public/introBg.svg'
import SmallFlower from '@/public/intro_flower_sm.svg'
import MiddleFlower from '@/public/intro_flower_md.svg'
import BigFlower from '@/public/intro_flower_lg.svg'

function Intro() {
  const router = useRouter();
  const movePage = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-20 relative">
        {/* 테스트 이미지들입니다 */}
        <div className='min-w-[320px] min-h-[420px]  flex justify-center items-center'>
          <Image src={Bg} alt="testBg" fill className='rounded-xl' />
        </div>
        <Image src={Logo} alt="testLogo" className='absolute z-20 left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] animate-fade-in' width={300} height={0}/>

      </div>
      <button className="w-80 h-12 bg-blossom-green border-[3px] border-blossom-white border-solid rounded-xl  mt-4 z-20" onClick={movePage}>
        초대장 만들러 가기
      </button>
      <div className='absolute overflow-hidden w-[360px] h-[640px]' >
        {/* first */}
        <Image src={BigFlower} alt="flower" className='absolute z-10 right-0 top-0 animate-fall-flower' />
        <Image src={MiddleFlower} alt="flower" className='absolute z-10 right-0 top-1/3 animate-fall-flower'  />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-1/2 top-0 animate-fall-flower' />
        <Image src={BigFlower} alt="flower" className='absolute z-10 right-1/3 top-0 animate-fall-flower' />
        <Image src={MiddleFlower} alt="flower" className='absolute z-10 right-0 top-2/3 animate-fall-flower'  />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-2/3 top-0 animate-fall-flower' />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-0 top-1/3 animate-fall-flower' />
        {/* second */}
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-[-300px] top-[-700px] animate-fall-flower' />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-0 top-[-600px]  animate-fall-flower ' />
        <Image src={BigFlower} alt="flower" className='absolute z-10 right-0 top-0 animate-fall-flower ' />
        <Image src={MiddleFlower} alt="flower" className='absolute z-10 right-[-200px]  top-[-500px] animate-fall-flower '  />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-[-400px]  top-[-800px]  animate-fall-flower ' />
        <Image src={BigFlower} alt="flower" className='absolute z-10 right-[-300px]  top-[-750px] animate-fall-flower' />
        <Image src={MiddleFlower} alt="flower" className='absolute z-10 right-[-150px]  top-[-650px] animate-fall-flower '  />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-[-50px]  top-[-600px] animate-fall-flower ' />
        <Image src={SmallFlower} alt="flower" className='absolute z-10 right-0 top-[-50px]  animate-fall-flower' />
      </div>
    </div>
  );
}

export default Intro;

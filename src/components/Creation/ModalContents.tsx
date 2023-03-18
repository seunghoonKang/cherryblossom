import Image from 'next/image';

type ModalContentsProps = {
  page: number;
};

const CONTENTS = [
  { text: '원하는 배경을\n터치해주세요.', image: '/instruction/9.svg' },
  {
    text: '캐릭터, 스티커\n터치 후 드래그\n해주세요',
    image: '/instruction/9.svg',
  },
  {
    text: '나만의 초대장\n완성!',
    image: '/instruction/9.svg',
  },
];

export default function ModalContents({ page }: ModalContentsProps) {
  return (
    <div className="flex items-center whitespace-pre font-pretendard">
      <Image
        alt="instruction_1"
        src={CONTENTS[page].image}
        height={'200'}
        width={'150'}
        className={'rounded-[8px]'}
      />
      <div className="w-[100%] break-words text-center text-[16px] leading-5">
        {CONTENTS[page].text}
      </div>
    </div>
  );
}

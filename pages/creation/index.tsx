import Custom from '@/src/components/Creation/Custom';
import Display from '@/src/components/Creation/Display';
import PageTitle from '@/src/components/Creation/PageTitle';
import { saveImg } from '@/src/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * 초대장 생성 페이지
 */
type CustomTypes = 'background' | 'character' | 'sticker';

const Creation = () => {
  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState<CustomTypes>('background');
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null);

  const [isTextEmpty, setIsTextEmpty] = useState(false);

  const handleClickCreation = () => {
    // 버튼 클릭 로직
  };

  return (
    <div id="temp">
      <PageTitle />
      <Display />
      <Custom
        setSelectedBackground={(item: number | null) => setSelectedBackground(item)}
        setSelectedCharacter={(item: number | null) => setSelectedCharacter(item)}
        setSelectedSticker={(item: number | null) => setSelectedSticker(item)}
        selectedItem={selectedItem}
        setSelectedItem={(item: CustomTypes) => setSelectedItem(item)}
      />
      <button
        disabled={isTextEmpty}
        onClick={() => saveImg('temp', uuidv4())}
        className={`w-[360px] font-pretendard font-bold h-12 ${
          isTextEmpty ? 'bg-blossom-gray' : ' bg-blossom-green'
        } bg-blossom-gray`}
      >
        초대장 완성하기
      </button>
    </div>
  );
};

export default Creation;

import Custom from '@/src/components/Creation/Custom';
import Display from '@/src/components/Creation/Display';
import PageTitle from '@/src/components/Creation/PageTitle';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
    <>
      <PageTitle />
      <Display />
      <Custom
        setSelectedBackground={(item: number | null) => setSelectedBackground(item)}
        setSelectedCharacter={(item: number | null) => setSelectedCharacter(item)}
        setSelectedSticker={(item: number | null) => setSelectedSticker(item)}
        selectedItem={selectedItem}
        setSelectedItem={(item: CustomTypes) => setSelectedItem(item)}
      />
      {isTextEmpty ? (
        <button
          // onClick={}
          className="w-96 h-12 bg-blossom-green"
        >
          초대장 완성하기
        </button>
      ) : (
        <button
          // onClick={}
          disabled
          className="w-96 h-12 bg-blossom-gray"
        >
          초대장 완성하기
        </button>
      )}
    </>
  );
};

export default Creation;

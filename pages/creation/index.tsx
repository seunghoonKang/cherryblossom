import Custom from '@/src/components/Creation/Custom';
import Display from '@/src/components/Creation/Display';
import PageTitle from '@/src/components/Creation/PageTitle';
import { useState } from 'react';

/**
 * 초대장 생성 페이지
 */
type CustomTypes = 'background' | 'charactor' | 'sticker';

const Creation = () => {
  const [selectedItem, setSelectedItem] = useState<CustomTypes>('background');
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  const [selectedCharactor, setSelectedCharactor] = useState<number | null>(null);
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
        setSelectedCharactor={(item: number | null) => setSelectedCharactor(item)}
        setSelectedSticker={(item: number | null) => setSelectedSticker(item)}
        selectedItem={selectedItem}
        setSelectedItem={(item: CustomTypes) => setSelectedItem(item)}
      />
      <button
      // onClick={}
      >
        for test
      </button>
    </>
  );
};

export default Creation;

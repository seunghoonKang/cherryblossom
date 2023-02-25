import Custom from '@/src/components/Creation/Custom';
import Display from '@/src/components/Creation/Display';
import PageTitle from '@/src/components/Creation/PageTitle';
import { useState } from 'react';

/**
 * 초대장 생성 페이지
 */
const Creation = () => {
  const [selectedBackgroud, setSelectedBackgroud] = useState(0);
  const [selectedCharactor, setSelectedCharactor] = useState(0);
  const [selectedSticker, setSelectedSticker] = useState(0);

  const [isTextEmpty, setIsTextEmpty] = useState(false);

  const handleClickCreation = () => {
    // 버튼 클릭 로직
  };

  return (
    <>
      <div>
        <PageTitle />
        <Display />
        <Custom />
        <button
        // onClick={}
        >
          for test
        </button>
      </div>
    </>
  );
};

export default Creation;

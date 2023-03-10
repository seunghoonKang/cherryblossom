import { useState } from 'react';
import Custom from '@/src/components/Creation/Custom';
import Display from '@/src/components/Creation/Display';
import PageTitle from '@/src/components/Creation/PageTitle';
import { saveImg } from '@/src/utils';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';
import { flushSync } from 'react-dom';

/**
 * 초대장 생성 페이지
 */

/**
 * [아메 TODO]
 * 완성된 디자인 추가하기
 * 완성하기 버튼 아래 고정하기 ✅
 * 버튼 간격 조정 ✅
 * 스크롤바 안보이게
 * 이미지 캡쳐 시 줄 바꿈 안되는 문제 확인하기
 */
type CustomTypes = 'background' | 'character' | 'sticker';

const Creation = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<CustomTypes>('background');
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
  const [textValue, setTextValue] = useState('');
  const [visibleCancelBtn, setVisibleCancelBtn] = useState('visible');
  const handleClickCreation = async () => {
    flushSync(() => {
      setVisibleCancelBtn('hidden'); // X 버튼 hidden
    });

    const filename = uuidv4();

    await saveImg('display', filename);
    const move = () =>
      router.push({
        pathname: '/complete/[img]',
        query: { img: filename },
      });
    setTimeout(move, 2000);
  };

  return (
    <>
      <Head>
        <title>초대장을 만들어보아요</title>
      </Head>
      <PageTitle />
      <Display
        selectedItem={selectedItem}
        selectedBackground={selectedBackground}
        selectedCharacter={selectedCharacter}
        selectedSticker={selectedSticker}
        textValue={textValue}
        setTextValue={(input: string) => setTextValue(input)}
        visibleCancelBtn={visibleCancelBtn}
      />
      <Custom
        selectedBackground={selectedBackground}
        selectedCharacter={selectedCharacter}
        selectedSticker={selectedSticker}
        setSelectedBackground={(item: number | null) => setSelectedBackground(item)}
        setSelectedCharacter={(item: number | null) => setSelectedCharacter(item)}
        setSelectedSticker={(item: number | null) => setSelectedSticker(item)}
        selectedItem={selectedItem}
        setSelectedItem={(item: CustomTypes) => setSelectedItem(item)}
      />
      <button
        disabled={!textValue.length}
        onClick={handleClickCreation}
        className={`fixed bottom-0 z-10 h-12 w-[360px] bg-blossom-gray font-pretendard font-bold ${
          !textValue.length ? 'bg-blossom-gray text-gray-400' : ' bg-blossom-green'
        }`}
      >
        초대장 완성하기
      </button>
    </>
  );
};

export default Creation;

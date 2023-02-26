import Image from 'next/image';

type CustomTypes = 'background' | 'character' | 'sticker';

type CustomProps = {
  selectedBackground: number | null;
  selectedCharacter: number | null;
  selectedSticker: number | null;
  setSelectedBackground: (item: number | null) => void;
  setSelectedCharacter: (item: number | null) => void;
  setSelectedSticker: (item: number | null) => void;
  selectedItem: CustomTypes;
  setSelectedItem: (item: CustomTypes) => void;
};

type CustomItem = {
  name: string;
  value: CustomTypes;
};

const CUSTOM_ITEMS: CustomItem[] = [
  { name: '배경', value: 'background' },
  { name: '캐릭터', value: 'character' },
  { name: '스티커', value: 'sticker' },
];

const BACKGROUND_IMAGE = [
  {
    id: 0,
    preview: 'bg_preview_flower_way.svg',
    value: 'bg_flower_way.svg',
  },
  {
    id: 1,
    preview: 'bg_preview_yellow_flower_garden.svg',
    value: 'bg_yellow_flower_garden.svg',
  },
];

const STICKER_IMAGE = [
  { id: 0, preview: 'st_preview_cherry_blossom.svg', value: 'st_cherry_blossom.png' },
  { id: 1, preview: 'st_preview_flower.svg', value: 'st_flower.png' },
];

const CHARACTER_IMAGE = [
  { id: 0, preview: 'st_preview_cherry_blossom.svg', value: 'st_cherry_blossom.png' },
  { id: 1, preview: 'st_preview_flower.svg', value: 'st_flower.png' },
];

export default function Custom(props: CustomProps) {
  const {
    selectedBackground,
    selectedCharacter,
    selectedSticker,
    setSelectedBackground,
    setSelectedCharacter,
    setSelectedSticker,
    selectedItem,
    setSelectedItem,
  } = props;

  const handleItemClick = (id: number) => {
    if (selectedItem === 'background') {
      setSelectedBackground(id);
      setSelectedCharacter(null);
      setSelectedSticker(null);
    }
    if (selectedItem === 'character') {
      setSelectedCharacter(id);
      setSelectedBackground(null);
      setSelectedSticker(null);
    }
    if (selectedItem === 'sticker') {
      setSelectedSticker(id);
      setSelectedCharacter(null);
      setSelectedBackground(null);
    }
  };

  return (
    <div className="w-[360px] h-96 bg-blossom-lightBlue flex-col space-y-[8px] mt-[8px] px-[20px]">
      <div className="grid grid-cols-3 gap-4">
        {CUSTOM_ITEMS.map(custom => {
          return (
            <button
              key={custom.value}
              className={`w-[96px] h-[36px] text-sm rounded-[10px] border-blossom-white border-2 
  ${selectedItem === custom.value ? 'bg-blossom-green' : 'bg-blossom-yellow'}`}
              onClick={() => setSelectedItem(custom.value)}
            >
              {custom.name}
            </button>
          );
        })}
      </div>
      <div className="border-t border-solid border-1 border-blossom-darkGray my-[8px]"></div>

      <div className="grid grid-cols-3 gap-4">
        {selectedItem === 'background' &&
          BACKGROUND_IMAGE.map(img => {
            return (
              <div
                key={img.id}
                className={`w-[96px] h-[112px] bg-blossom-white border-solid border-2  ${
                  selectedBackground === img.id ? ' border-blossom-green' : 'border-blossom-white'
                }  rounded-[14px] overflow-hidden`}
                onClick={() => handleItemClick(img.id)}
              >
                <Image
                  src={`/backgrounds/${img.preview}`}
                  alt={img.preview}
                  width={96}
                  height={112}
                />
              </div>
            );
          })}
        {selectedItem === 'character' &&
          CHARACTER_IMAGE.map(img => {
            return (
              <div
                key={img.id}
                className={`w-[96px] 'h-[56px]' bg-blossom-white border-solid border-2 ${
                  selectedCharacter === img.id ? ' border-blossom-green' : 'border-blossom-white'
                }   rounded-[14px] overflow-hidden`}
                onClick={() => handleItemClick(img.id)}
              >
                <Image src={`/characters/${img.preview}`} alt={img.value} width={96} height={56} />
              </div>
            );
          })}
        {selectedItem === 'sticker' &&
          STICKER_IMAGE.map(img => {
            return (
              <div
                key={img.id}
                className={`w-[96px] 'h-[56px]' bg-blossom-white border-solid border-2 ${
                  selectedSticker === img.id ? ' border-blossom-green' : 'border-blossom-white'
                }   rounded-[14px] overflow-hidden`}
                onClick={() => handleItemClick(img.id)}
              >
                <Image src={`/stickers/${img.preview}`} alt={img.value} width={96} height={56} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

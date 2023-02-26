type CustomTypes = 'background' | 'character' | 'sticker';

type CustomProps = {
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

const MOCK_IMAGES = [
  {
    id: 0,
    value: 'url1',
  },
  {
    id: 1,
    value: 'url2',
  },
  {
    id: 2,
    value: 'url3',
  },
  {
    id: 3,
    value: 'url1',
  },
  {
    id: 4,
    value: 'url2',
  },
  {
    id: 5,
    value: 'url3',
  },
];

export default function Custom(props: CustomProps) {
  const {
    setSelectedBackground,
    setSelectedCharacter,
    setSelectedSticker,
    selectedItem,
    setSelectedItem,
  } = props;

  const handleCustomTypeClick = (value: CustomTypes) => {
    setSelectedItem(value);
  };

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
    <div className="w-[360px] h-96 bg-blossom-lightBlue flex-col space-y-2">
      <div className="grid grid-cols-3 gap-4 pl-5 pr-3 mx-1">
        {CUSTOM_ITEMS.map(custom => {
          if (selectedItem === custom.value) {
            return (
              <button
                key={custom.value}
                className="w-24 h-9 text-sm rounded bg-blossom-green border-blossom-white border-2"
                onClick={() => handleCustomTypeClick(custom.value)}
              >
                {custom.name}
              </button>
            );
          }
          if (selectedItem !== custom.value) {
            return (
              <button
                key={custom.value}
                className="w-24 h-9 text-sm rounded bg-blossom-yellow border-blossom-white border-2"
                onClick={() => handleCustomTypeClick(custom.value)}
              >
                {custom.name}
              </button>
            );
          }
        })}
      </div>
      <div className="border-t border-solid border-1 border-blossom-darkGray mx-5"></div>

      {selectedItem === 'background' && (
        <div className="grid grid-cols-3 gap-4 pl-5 pr-3 mx-1">
          {MOCK_IMAGES.map(img => {
            return (
              <div
                key={img.id}
                className="w-24 h-28 bg-blossom-gray border-solid border-2 border-blossom-white rounded-md"
                // style={{ backgroundImage: `url(${img.value})` }}
                onClick={() => handleItemClick(img.id)}
              ></div>
            );
          })}
        </div>
      )}
      {selectedItem !== 'background' && (
        <div className="grid grid-cols-3 gap-4 pl-5 pr-3 mx-1">
          {MOCK_IMAGES.map(img => {
            return (
              <div
                key={img.id}
                className="w-24 h-14 bg-blossom-gray border-solid border-2 border-blossom-white rounded-md"
                style={{ backgroundImage: `url(${img.value})` }}
                onClick={() => handleItemClick(img.id)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import CompleteLayout from '@/src/components/CompleteLayout';
import InterActionCard from '@/src/components/InterActionCard';
import React, { useState } from 'react';

function Received() {
  const [isAnimationOver, setIsAnimationOver] = useState(false);
  const [needOpenBtn, setNeedOpenBtn] = useState(true);

  const imageName = '/성택미모티콘.png';

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {isAnimationOver ? (
        <CompleteLayout imageName={imageName} type="receive" />
      ) : (
        <InterActionCard
          needOpenBtn={needOpenBtn}
          imageName={imageName}
          setIsAnimationOver={setIsAnimationOver}
        />
      )}
    </div>
  );
}

export default Received;

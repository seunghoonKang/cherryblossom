import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/src/components/Loading/Spinner';
import Image from 'next/image';

const CompleteLayout = dynamic(() => import('@/src/components/CompleteLayout'), {
  loading: () => <Spinner />,
});
const InterActionCard = dynamic(() => import('@/src/components/InterActionCard'), {
  loading: () => <Spinner />,
});

export default function CompleteComponent({
  imgUrl,
  imageName,
}: {
  imgUrl: string;
  imageName: string;
}) {
  const [isAnimationOver, setIsAnimationOver] = useState(false);

  useEffect(() => {
    const animation = setTimeout(() => {
      setIsAnimationOver(true);
    }, 2200);
    return () => clearTimeout(animation);
  }, [isAnimationOver]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {isAnimationOver ? (
        <CompleteLayout
          type="complete"
          imageName={imageName}
          image={<Image src={imgUrl} alt="invitation-img" fill priority loading="eager" />}
        />
      ) : (
        <InterActionCard
          needOpenBtn={false}
          image={<Image src={imgUrl} alt="invitation-img" fill priority loading="eager" />}
        />
      )}
    </div>
  );
}

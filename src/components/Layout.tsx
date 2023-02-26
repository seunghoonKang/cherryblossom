import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center bg-gray-200 items-center">
      <div className="relative h-full w-full max-w-[360px] max-h-[640px] bg-skyBlue">
        {children}
      </div>
    </div>
  );
}

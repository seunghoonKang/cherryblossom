import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center bg-gray-200">
      <div className="relative h-full w-full max-w-[360px] bg-white">{children}</div>
    </div>
  );
}

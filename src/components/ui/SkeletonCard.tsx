// components/ui/SkeletonCard.tsx
"use client";

export default function SkeletonCard() {
  return (
    <div className="p-6 border border-gray-100 rounded-xl shadow-lg bg-white animate-pulse">
      <div className="h-4 bg-green-200 rounded w-1/3 mb-2"></div>
      <div className="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-100 rounded w-full mb-4"></div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div>
          <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
          <div className="h-8 bg-green-200 rounded w-28"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded-lg w-20"></div>
      </div>
    </div>
  );
}

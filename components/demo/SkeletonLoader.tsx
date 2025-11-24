import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="w-full max-w-xs bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-slate-700 animate-pulse"></div>
        <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-20 bg-slate-700 rounded animate-pulse"></div>
        <div className="flex gap-2">
            <div className="h-8 flex-1 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-8 flex-1 bg-slate-700 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="text-xs text-slate-500 text-center pt-2">Loading state simulation</div>
    </div>
  );
};

export default SkeletonLoader;
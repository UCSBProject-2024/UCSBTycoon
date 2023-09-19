// interface Tool {
//   multiplicator: number;
//   price: number;
// }

export function GameTools() {
  // const tools: Tool[] = [
  //   { multiplicator: 2, price: 1_000 },
  //   { multiplicator: 4, price: 10_000 },
  //   { multiplicator: 8, price: 100_000 },
  //   { multiplicator: 16, price: 1_000_000 },
  //   { multiplicator: 32, price: 10_000_000 },
  //   { multiplicator: 64, price: 100_000_000 }
  // ];

  return (
    <>
      <div className="flex justify-center gap-1">
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>2x</div>
          <div className="text-xs">1K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>4x</div>
          <div className="text-xs">10K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>8x</div>
          <div className="text-xs">100K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>16x</div>
          <div className="text-xs">1M</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>32x</div>
          <div className="text-xs">10M</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-600 bg-orange-300">
          <div>64x</div>
          <div className="text-xs">100M</div>
        </div>
      </div>
      <div className="my-2">
        <p className="text-center text-sm">Buy some items and multiply your production.</p>
      </div>
    </>
  );
}

// export function GameToolDetail() {
//   return;
// }

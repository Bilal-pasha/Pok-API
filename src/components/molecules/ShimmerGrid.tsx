import React from "react";
import { ShimmerBox } from "@/components/atoms";

interface ShimmerGridProps {
  count?: number;
  columns?: number;
}

const ShimmerGrid: React.FC<ShimmerGridProps> = ({
  count = 6,
  columns = 3,
}) => {
  return (
    <div className={`grid gap-4 grid-cols-${columns}`}>
      {Array.from({ length: count }).map((_, i) => (
        <ShimmerBox key={i} />
      ))}
    </div>
  );
};

export default ShimmerGrid;

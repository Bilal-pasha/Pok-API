import React from "react";

interface ShimmerBoxProps {
  width?: string;
  height?: string;
  className?: string;
}

const ShimmerBox: React.FC<ShimmerBoxProps> = ({
  width = "w-full",
  height = "h-32",
  className = "",
}) => {
  return (
    <div
      className={`${width} ${height} ${className} bg-gray-200 rounded-md animate-pulse`}
    />
  );
};

export default ShimmerBox;

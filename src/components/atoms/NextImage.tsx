'use client';

import * as React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { NextImageProps } from '@/components/atoms';

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  classNames,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(useSkeleton ? 'loading' : 'complete');
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure style={!widthIsSet ? { width: `${width}px` } : undefined} className={className}>
      <Image
        className={cn(
          classNames?.image,
          status === 'loading' && cn('animate-pulse', classNames?.blur),
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </figure>
  );
}

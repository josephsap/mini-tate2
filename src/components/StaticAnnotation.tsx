// Copyright (c) 2023 Alteryx, Inc. All rights reserved.

import React, { useState } from 'react';
import { pixelToNum } from '../utils';

import { TOptions } from '../types';

export type Props = {
  top: string;
  left: string;
  height: string;
  width: string;
  onClick: () => void;
  options: TOptions;
  name: string;
  rainbowMode: boolean;
  type?: string | null;
  types?: string[];
  setHoverActiveAnno: (name: string) => void;
  onHoverFromList: string;
};

const colors = [
  [245, 121, 58],
  [169, 90, 161],
  [133, 192, 249],
  [15, 32, 128],
];
const getColor = (types, type) => {
  if (!types.length || type === null || types.indexOf(type) === -1)
    return 'none';
  const [r, g, b] = colors[types.indexOf(type) % 4];
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

function StaticAnnotation({
  height,
  width,
  top,
  left,
  onClick,
  options,
  name,
  rainbowMode,
  type = null,
  types = [],
  setHoverActiveAnno,
  onHoverFromList
}: Props) {
  const styles = options.annoStyles || {};
  const [showName, setShowName] = useState<boolean>(false);
  // color-code by type
  const backgroundColor = rainbowMode ? getColor(types, type) : options.annoStyles.backgroundColor;

  // const calculateTooltipPosition = () => {
  //   const leftCoord = pixelToNum(width) / 2 - 100;
  //   const imgBounds = document.getElementById('anno-img')?.getBoundingClientRect();
  //   if (imgBounds) {
  //     if (imgBounds.right < leftCoord + pixelToNum(left) + 200) {
  //       return pixelToNum(width) < 200 ? `${pixelToNum(width) - 200}px` : left;
  //     }
  //     if (imgBounds.left > leftCoord + pixelToNum(left)) {
  //       return left;
  //     }
  //   }
  //   console.log(leftCoord, 'left coords')
  //   return `${leftCoord}px`;
  // };

  return (
    <div
      className={`staticAnno${showName ? ' pointer' : ''}`}
      data-testid="static-annotation"
      onClick={onClick}
      onPointerDown={(e) => e.stopPropagation()}
      style={{ ...styles, height, width, top, left, backgroundColor }}
      onMouseEnter={() => { setShowName(true); setHoverActiveAnno(name) }}
      onMouseLeave={() => { setShowName(false); setHoverActiveAnno('') }}
    >
      {showName || onHoverFromList === name ? (
        <h3
          className="annotationNameHover"
          style={{
            top: `${pixelToNum(height) - 10}px`,
            left: 0,
          }}
        >
          {name}
        </h3>
      ): null}
      {/* {onHoverFromList === name ? (
        <h3
          className="annotationNameHover"
          style={{
            top: `${pixelToNum(height) - 10}px`,
            left: 0,
          }}
        >
          {name}
        </h3>
      ) : null} */}
    </div>
  );
}

export default StaticAnnotation;

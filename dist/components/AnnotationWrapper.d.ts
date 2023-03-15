import React from 'react';
import { TAnnotation, TOptions } from '../types';
type Props = {
    name: string;
    type: string | null;
    top: string;
    left: string;
    height: string;
    width: string;
    handleEditAnnotation: (name: string) => void;
    handleCancelEdit: () => void;
    handleKeyPress: (e: React.KeyboardEvent, name: string) => void;
    handlePointerMove: (event: React.PointerEvent) => void;
    handleSaveEdit: (annotation: TAnnotation, originalName: string) => void;
    removeAnnotation: (name: string) => void;
    annotationTypes: string[];
    options: TOptions;
    rainbowMode: boolean;
};
declare function AnnotationWrapper({ handleEditAnnotation, name, height, width, top, left, handleCancelEdit, handleKeyPress, handlePointerMove, handleSaveEdit, removeAnnotation, type, annotationTypes, options, rainbowMode, }: Props): JSX.Element;
export default AnnotationWrapper;

/// <reference types="react" />
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
declare function StaticAnnotation({ height, width, top, left, onClick, options, name, rainbowMode, type, types, setHoverActiveAnno, onHoverFromList }: Props): JSX.Element;
export default StaticAnnotation;

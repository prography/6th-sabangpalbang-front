import { ITag } from './tag';

export interface ILikeCard {
    idx: number;
    imgUrl: string;
    name: string;
    tags: ITag[];
} 
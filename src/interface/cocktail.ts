import { IAbvClassification } from './abvClassification';
import { IBase } from './base';
import { IFlavor } from './flavor';
import { ITag } from './tag';

export interface ICocktail extends IBase {
  ingredients: string;
  nonAbv: boolean;
  tags: ITag[];
  flavors: IFlavor[];
  base: IBase;
  abvClassification: IAbvClassification;
}
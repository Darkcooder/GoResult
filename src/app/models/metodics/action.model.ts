import {FieldModel} from './field.model';
import {Model} from '../model';

export class ActionModel extends Model{
  name: string;
  description: string;
  fields: Array<FieldModel>;
}

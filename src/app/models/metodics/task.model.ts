import {ActionModel} from './action.model';
import {Model} from '../model';

export class TaskModel extends Model{
  name: string;
  description: string;
  actions: Array<ActionModel>;
}

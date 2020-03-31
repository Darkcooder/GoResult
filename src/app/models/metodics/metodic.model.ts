import {TaskModel} from './task.model';
import {Model} from '../model';

export class MetodicModel extends Model{
  name: string;
  description: string;
  tasks: Array<TaskModel>;
}

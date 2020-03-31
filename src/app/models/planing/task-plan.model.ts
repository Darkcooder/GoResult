import {Model} from '../model';
import {TaskModel} from '../metodics/task.model';
import {ActionPlanModel} from './action-plan.model';

export class TaskPlanModel extends Model {
  proto: TaskModel;
  actions: Array<ActionPlanModel>;
  date: Date;
  comment: string;
}

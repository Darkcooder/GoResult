import {Model} from '../model';
import {TaskPlanModel} from '../planing/task-plan.model';
import {ActionResultModel} from './action-result.model';

export class TaskResultModel extends Model {
  proto: TaskPlanModel;
  actions: Array<ActionResultModel>;
  date: Date;
  comment: string;
}

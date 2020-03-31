import {Model} from '../model';
import {MetodicModel} from '../metodics/metodic.model';
import {TaskPlanModel} from './task-plan.model';

export class MetodicPlanModel extends Model {
  proto: MetodicModel;
  tasks: Array<TaskPlanModel>;
  comment: string;
}

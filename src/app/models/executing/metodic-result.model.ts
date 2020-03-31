import {Model} from '../model';
import {MetodicPlanModel} from '../planing/metodic-plan.model';
import {TaskResultModel} from './task-result.model';

export class MetodicResultModel extends Model {
  name: string;
  proto: MetodicPlanModel;
  tasks: Array<TaskResultModel>;
}

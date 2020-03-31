import {Model} from '../model';
import {ActionPlanModel} from '../planing/action-plan.model';
import {FieldResultModel} from './field-result.model';

export class ActionResultModel extends Model {
  proto: ActionPlanModel;
  fields: Array<FieldResultModel>;
  comment: string;
}

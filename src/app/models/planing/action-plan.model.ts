import {ActionModel} from '../metodics/action.model';
import {Model} from '../model';
import {FieldResultModel} from '../executing/field-result.model';

export class ActionPlanModel extends Model {
  proto: ActionModel;
  result: Array<FieldResultModel>;
  comment: string;
}

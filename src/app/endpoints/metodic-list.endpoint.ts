import {ApiEndpoint} from './api.endpoint';
import {ApiMethod, ApiService} from '../services/api/api.service';
import {MetodicModel} from '../models/metodics/metodic.model';

class MetodicListEndpoint extends ApiEndpoint<MetodicListRequest, MetodicModel[]> {
  protected url: '/metodics/getMetodicList';
  protected name: 'MetodicList';
  protected method = ApiMethod.Get;
  protected sampleResponse = [];
}

class MetodicListRequest {
}

export {MetodicListEndpoint, MetodicListRequest};

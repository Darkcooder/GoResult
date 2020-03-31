import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetodicListComponent } from './layouts/metodics/metodic-list/metodic-list.component';
import { MetodicDetailsComponent } from './layouts/metodics/metodic-details/metodic-details.component';
import { MetodicFormComponent } from './layouts/metodics/metodic-form/metodic-form.component';
import { TaskListComponent } from './layouts/metodics/child/tasks/task-list/task-list.component';
import { TaskDetailsComponent } from './layouts/metodics/child/tasks/task-details/task-details.component';
import { TaskFormComponent } from './layouts/metodics/child/tasks/task-form/task-form.component';
import { ActionListComponent } from './layouts/metodics/child/actions/action-list/action-list.component';
import { ActionDetailsComponent } from './layouts/metodics/child/actions/action-details/action-details.component';
import { ActionFormComponent } from './layouts/metodics/child/actions/action-form/action-form.component';
import { FieldListComponent } from './layouts/metodics/child/fields/field-list/field-list.component';
import { FieldDetailsComponent } from './layouts/metodics/child/fields/field-details/field-details.component';
import { FieldFormComponent } from './layouts/metodics/child/fields/field-form/field-form.component';
import { MetodicPlanListComponent } from './layouts/planing/metodic-plan/metodic-plan-list/metodic-plan-list.component';
import { MetodicPlanDetailsComponent } from './layouts/planing/metodic-plan/metodic-plan-details/metodic-plan-details.component';
import { MetodicPlanFormComponent } from './layouts/planing/metodic-plan/metodic-plan-form/metodic-plan-form.component';
import { TaskPlanListComponent } from './layouts/planing/task-plan/task-plan-list/task-plan-list.component';
import { TaskPlanDetailsComponent } from './layouts/planing/task-plan/task-plan-details/task-plan-details.component';
import { TaskPlanFormComponent } from './layouts/planing/task-plan/task-plan-form/task-plan-form.component';
import { ActionPlanListComponent } from './layouts/planing/action-plan/action-plan-list/action-plan-list.component';
import { ActionPlanDetailsComponent } from './layouts/planing/action-plan/action-plan-details/action-plan-details.component';
import { ActionPlanFormComponent } from './layouts/planing/action-plan/action-plan-form/action-plan-form.component';
import { ActionResultListComponent } from './layouts/executing/action-result/action-result-list/action-result-list.component';
import { ActionResultDetailsComponent } from './layouts/executing/action-result/action-result-details/action-result-details.component';
import { ActionResultFormComponent } from './layouts/executing/action-result/action-result-form/action-result-form.component';
import { FieldResultListComponent } from './layouts/executing/field-result/field-result-list/field-result-list.component';
import { FieldResultDetailsComponent } from './layouts/executing/field-result/field-result-details/field-result-details.component';
import { FieldResultFormComponent } from './layouts/executing/field-result/field-result-form/field-result-form.component';
import { MetodicResultListComponent } from './layouts/executing/metodic-result/metodic-result-list/metodic-result-list.component';
import { MetodicResultDetailsComponent } from './layouts/executing/metodic-result/metodic-result-details/metodic-result-details.component';
import { MetodicResultResultComponent } from './layouts/executing/metodic-result/metodic-result-result/metodic-result-result.component';
import { TaskResultListComponent } from './layouts/executing/task-result/task-result-list/task-result-list.component';
import { TaskResultDetailsComponent } from './layouts/executing/task-result/task-result-details/task-result-details.component';
import { TaskResultFormComponent } from './layouts/executing/task-result/task-result-form/task-result-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MetodicListComponent,
    MetodicDetailsComponent,
    MetodicFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskFormComponent,
    ActionListComponent,
    ActionDetailsComponent,
    ActionFormComponent,
    FieldListComponent,
    FieldDetailsComponent,
    FieldFormComponent,
    MetodicPlanListComponent,
    MetodicPlanDetailsComponent,
    MetodicPlanFormComponent,
    TaskPlanListComponent,
    TaskPlanDetailsComponent,
    TaskPlanFormComponent,
    ActionPlanListComponent,
    ActionPlanDetailsComponent,
    ActionPlanFormComponent,
    ActionResultListComponent,
    ActionResultDetailsComponent,
    ActionResultFormComponent,
    FieldResultListComponent,
    FieldResultDetailsComponent,
    FieldResultFormComponent,
    MetodicResultListComponent,
    MetodicResultDetailsComponent,
    MetodicResultResultComponent,
    TaskResultListComponent,
    TaskResultDetailsComponent,
    TaskResultFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

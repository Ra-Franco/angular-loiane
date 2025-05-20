import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribePocRoutingModule } from './unsubscribe-rxjs-routing.module';
import { PocComponent } from './components/poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocAsyncComponent } from './components/poc-async.component';
import { PocTakeComponent } from './components/poc-take.component';
import { PocTakeUntilComponent } from './components/poc-take-until.component';
import { PocUnsubComponent } from './components/poc-unsub.component';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';



@NgModule({
  declarations: [PocComponent, PocBaseComponent, PocAsyncComponent, PocTakeComponent, PocTakeUntilComponent, PocUnsubComponent, UnsubscribePocComponent],
  imports: [
    CommonModule,
    UnsubscribePocRoutingModule
  ]
})
export class UnsubscribePocModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const loggerType = environment.logger
@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    { provide: TestService, useClass: TestService },
    // { provide: TestService, useFactory: () => new TestService()},
    // { provide: NewTestService, useExisting: TestService}
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    HttpClientModule
  ]
})
export class CoreModule { }

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOnChangeComponent } from './components/lifecycle/ng-on-change/ng-on-change.component';
import { NgOnInitComponent } from './components/lifecycle/ng-on-init/ng-on-init.component';

import { NgDoCheckComponent } from './components/lifecycle/ng-do-check/ng-do-check.component';
import { SharedModule } from './shared/shared.module';
import { NgAfterContentInitAndCheckedComponent } from './components/lifecycle/ng-after-content-init-and-checked/ng-after-content-init-and-checked.component';
import { NgAfterViewInitComponent } from './components/lifecycle/ng-after-view-init/ng-after-view-init.component';
import { NgOnDestroyComponent } from './components/lifecycle/ng-on-destroy/ng-on-destroy.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from './services/app.config.service/appconfig.service';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { RequestInterceptor } from './services/interceptors/request.interceptor';
import { InitService } from './services/init.service/init.service';

// APP_INITIALIZER FACTORY FUNCTION
function initializeApp(initService: InitService) {
  return () => {
    return initService.init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    PipesComponent,
    LifecycleComponent,
    NgOnChangeComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgAfterContentInitAndCheckedComponent,
    NgAfterViewInitComponent,
    NgOnDestroyComponent,
    DependencyInjectionComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule, // for http client (Should be registered at root level)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService],
      multi: true,
    },
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

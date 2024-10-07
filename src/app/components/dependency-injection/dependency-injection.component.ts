import {
  Component,
  Host,
  Inject,
  inject,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { API_SERVICE } from 'src/app/services/api.factory.service/apiservice.factory';
import { AppConfig } from 'src/app/services/app.config.service/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/services/app.config.service/appconfig.service';
import { course } from 'src/app/services/common.Interface';
import { CommonService } from 'src/app/services/common.service';
import { LOCAL_STORAGE } from 'src/app/services/localstorage.service/localstorage.token';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  courses!: course[];
  // constructor(@Self() private _commonService: CommonService) {}
  // constructor(@SkipSelf() private _commonService: CommonService) {}
  // constructor(@Host() private _commonService: CommonService) {}
  constructor(
    @Optional() private _commonService: CommonService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    @Inject(API_SERVICE) private apiService: AppConfig
  ) {}
  // constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig){} // value provider
  // constructor(private _commonService: CommonService) {} // class based service
  ngOnInit(): void {
    this.courses = this._commonService.getStudentLicense();
    console.log('AppConfig : ' + this.config.apiEndpoint);
    console.log('LocalStorage Factory() : ' + this.localStorage.length);
    console.log('API Factory() : ' + this.apiService.apiEndpoint);
  }
}

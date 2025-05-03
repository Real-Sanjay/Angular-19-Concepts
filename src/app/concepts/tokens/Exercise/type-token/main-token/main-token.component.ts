import { Component, Inject, inject, OnInit } from '@angular/core';
import { LogMessage1ServiceService } from '../log-message1-service.service';
import { LogMessage2ServiceService } from '../log-message2-service.service';
import {LOG_MSG_ONE} from '../../Dependencies/injection-token.js'
@Component({
  selector: 'app-main-token',
  standalone: true,
  imports: [],
  templateUrl: './main-token.component.html',
  styleUrl: './main-token.component.css',
  providers:[{provide: LOG_MSG_ONE, useClass: LogMessage1ServiceService},
  ]
})
export class MainTokenComponent implements OnInit {
// loggers = inject(LogMessage1ServiceService);// type injector
constructor(@Inject(LOG_MSG_ONE)  public logger: LogMessage1ServiceService) {
}

ngOnInit(): void {  
this.logger.logMessage();
}
}

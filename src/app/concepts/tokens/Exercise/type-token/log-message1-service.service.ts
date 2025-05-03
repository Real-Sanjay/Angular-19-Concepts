import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage1ServiceService {

  constructor() { }

  logMessage(): void{
    console.log("Hello from service1");
  }
}

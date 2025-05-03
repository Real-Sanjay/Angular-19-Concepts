import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage2ServiceService {

  constructor() { }

  logMessage(): void{
    console.log("Hello from service2");
  }
}

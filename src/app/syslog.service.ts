import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Syslog } from './syslog';
/*import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';*/

const json = `[
  {
    "date": "2017-10-20T07:20:15.973Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t51\\tven. oct. 20 09:20:15 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the Application event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:20.145Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 4,
    "facility": 0,
    "severity": 4,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t4\\tApplication\\t52\\tven. oct. 20 09:20:20 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tWarning\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:22.635Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t53\\tven. oct. 20 09:20:22 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:22.772Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t54\\tven. oct. 20 09:20:22 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:24.242Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 3,
    "facility": 0,
    "severity": 3,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t3\\tApplication\\t55\\tven. oct. 20 09:20:24 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tError\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:25.827Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t56\\tven. oct. 20 09:20:25 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:26.062Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t57\\tven. oct. 20 09:20:26 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:27.481Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 4,
    "facility": 0,
    "severity": 4,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t4\\tApplication\\t58\\tven. oct. 20 09:20:27 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tWarning\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:27.799Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 4,
    "facility": 0,
    "severity": 4,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t4\\tApplication\\t59\\tven. oct. 20 09:20:27 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tWarning\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:29.810Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 3,
    "facility": 0,
    "severity": 3,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t3\\tApplication\\t60\\tven. oct. 20 09:20:29 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tError\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:31.776Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t61\\tven. oct. 20 09:20:31 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:31.931Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t62\\tven. oct. 20 09:20:31 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:32.125Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t63\\tven. oct. 20 09:20:32 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:32.691Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t64\\tven. oct. 20 09:20:32 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:34.497Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 2,
    "facility": 0,
    "severity": 2,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t2\\tApplication\\t65\\tven. oct. 20 09:20:34 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tAudit Failure\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:36.091Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 6,
    "facility": 0,
    "severity": 6,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t6\\tApplication\\t66\\tven. oct. 20 09:20:36 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tInformation\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  },
  {
    "date": "2017-10-20T07:20:37.561Z",
    "ip": "127.0.0.1",
    "host": "LT-Stagiaire4.tellux.dom",
    "prival": 5,
    "facility": 0,
    "severity": 5,
    "type": "RFC3164",
    "message": "MSWinEventLog\\t5\\tApplication\\t67\\tven. oct. 20 09:20:37 2017\\t0\\tSolarWinds Log Forwarder for Windows (Application)\\t\\tN/A\\tAudit Success\\tLT-Stagiaire4.tellux.dom\\t0\\tTest Message from Log Forwarder to the  Application  event log.\\n"
  }
]`;


@Injectable()
export class SyslogService {

  constructor() { }

  public getAll(): Syslog[] {
    return JSON.parse(json);
  }

  /*public getAll(): Observable<Syslog[]> {
    return this.http
      .get('http://localhost:3000' + '/syslogs')
      .map(res => {
        const syslogs = res.json();
        return syslogs.map((syslog) => new Syslog(syslog));
      })
      .catch(this.handleError);
  }

  public handleError(error: Response | any) {
    console.error('SyslogService::handleError ', error);
    return Observable.throw(error);
  }*/

}

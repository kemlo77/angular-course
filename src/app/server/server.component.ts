import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  private _serverStatus: string = 'offline';
  private upTime: number = 12;

  get serverStatus(): string {
    return this._serverStatus;
  }

  getUptime(): number {
    return this.upTime;
  }

  constructor() {
    this._serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}

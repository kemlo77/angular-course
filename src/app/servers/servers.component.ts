import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-component',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }



  greeting(): string {
    return 'harriet säger hej';
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = ' Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  // Use this to call as attribute and not as tag
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles: [`
  //   .online {
  //     color: black;
  //   }
  // `]
  // requires styles for ngClass
})
export class ServersComponent implements OnInit {
  clicked: boolean = false;
  secretPassword: string = "";
  serverStatus: string;
  total = []
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  ngOnInit(): void {
  }
  onClick(){
    // this.username = "";
    this.clicked = true;
    this.total.push(this.total.length + 1);
  }
  handleChange(e){
    this.secretPassword = (<HTMLInputElement>e.target).value;
  }
  getColor(){
    return this.total.length > 4 ? 'green': '';
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {MyApiClientService} from '../my-api-client.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  public users: any;

  constructor(private myApiClient: MyApiClientService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.myApiClient.get<any>().subscribe(
      (response) => {
        this.users = response.data;
        console.log(this.users);
        }
    )
  }
  

}
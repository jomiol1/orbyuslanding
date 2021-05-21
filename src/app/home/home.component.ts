import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  isHidden: boolean = false;
  active;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  fireEvent(e){
    this.isHidden = true;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg'});
  }

}

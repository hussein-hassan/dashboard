import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    let el = document.querySelector('div.modal-backdrop');
    el.parentNode.removeChild(el);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postForm = this.fb.group({
    title: [''],
    labels: this.fb.array([
      this.fb.control(''),
    ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

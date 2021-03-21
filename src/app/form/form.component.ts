import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Post } from '../shared/interfaces/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() formSubmission: EventEmitter<Post> = new EventEmitter();

  postForm = this.fb.group({
    title: [''],
    labels: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get labels() {
    return this.postForm.get('labels') as FormArray;
  }

  addLabel() {
    this.labels.push(this.fb.control(''));
  }

  onSubmit() {
    const { value: formValues } = this.postForm;
    console.log(formValues);
    this.formSubmission.emit(formValues);
  }
}

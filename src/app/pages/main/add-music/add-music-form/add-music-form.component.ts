import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mmy-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.scss']
})
export class AddMusicFormComponent implements OnInit {

  ytbForm = this.fb.group({
    ytbLink: ['', [
      Validators.required
    ]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}

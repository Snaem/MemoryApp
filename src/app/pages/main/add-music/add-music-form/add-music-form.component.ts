import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mmy-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.scss']
})
export class AddMusicFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ytbForm = this.fb.group({
    ytbLink: ['', [
      Validators.required
    ]]
  });


  @Output() sendYoutubeVideoId: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    let youtubeVideoId = this.ytbForm.value.ytbLink;
    youtubeVideoId = youtubeVideoId.split('v=')[1];

    this.sendYoutubeVideoId.emit(youtubeVideoId);
  }
}

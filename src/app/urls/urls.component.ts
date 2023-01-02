import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {
  AddLinkForm: FormGroup;
  apiResponse: any;
  warningIcon = faExclamationCircle;
  successIcon = faCheckCircle;

  constructor(private fb: FormBuilder,
    private Api: ApiService) { }

  ngOnInit(): void {
    this.AddLinkForm = this.fb.group({
      longUrl: ['', Validators.required],
      ending: '',
      days: 90
    });
  }

  get longUrl() {
    return this.AddLinkForm.get('longUrl');
  }

  get ending() {
    return this.AddLinkForm.get('ending');
  }

  get days() {
    return this.AddLinkForm.get('days');
  }

  onSubmit() {
    this.Api.postUrl(this.AddLinkForm.value).subscribe((res: any) => {
      this.apiResponse = res;
      if (this.apiResponse.status == 'OK') {
        this.AddLinkForm.reset(this.AddLinkForm.value);
      }
    })
  }

}

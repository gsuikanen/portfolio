import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
  path: string[];
  loadPage = true;

  constructor(private fb: FormBuilder,
    private Api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url.split('/')
    if (this.path[1] !== 'url') {
      this.loadPage = false;
      this.Api.getUrl(this.path[1]).subscribe((res: any) => {
        this.apiResponse = res;
        console.log(this.apiResponse);
        if (this.apiResponse.status == 'OK') {
          window.location.href = this.apiResponse.url.long;
        }
      })
    } else {
      this.AddLinkForm = this.fb.group({
        longUrl: ['', Validators.required],
        ending: '',
        days: 90
      });
    }

    
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

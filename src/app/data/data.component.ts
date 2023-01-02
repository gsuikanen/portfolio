import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  PersonForm: FormGroup;
  apiResponse: any;
  maleIcon = faMars;
  femaleIcon = faVenus;

  constructor(private fb: FormBuilder,
    private Api: ApiService) { }

  ngOnInit(): void {
    this.PersonForm = this.fb.group({
      country: '',
      maxAge: 99,
      gender: ''
    });
  }

  get country() {
    return this.PersonForm.get('country');
  }

  get maxAge() {
    return this.PersonForm.get('maxAge');
  }

  get gender() {
    return this.PersonForm.get('gender');
  }

  onSubmit() {
    this.Api.getPerson(this.PersonForm.value).subscribe((res: any) => {
      this.apiResponse = res;
      if (this.apiResponse.status == 'OK') {
        this.PersonForm.reset(this.PersonForm.value);
      }
    })
  }

}

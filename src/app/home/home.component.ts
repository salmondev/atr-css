import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  error: string;
  userId = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  http: any;
  data: any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }

  getData() {
    return new Promise<[any]>(resolve => {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // const options = new HttpRequest({ headers });

      this.http.get(`${environment.apiUrl}`, headers)
        .subscribe(data => {

          if (data.status === 200) {
            this.data = JSON.parse(data._body);
            console.log(this.data);
            resolve(this.data);
          } else {
            this.data = [];
            resolve(this.data);
          }
        });
    });
  }

}

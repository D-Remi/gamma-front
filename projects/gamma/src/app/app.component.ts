import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUrlService } from './api-url.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gamma';
  selectedFile!: File;
  apiUrl = this.apiUrlService.getApiUrl();
  groupMusicauxList!: any[];

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private apiUrlService: ApiUrlService) {}

  ngOnInit() {
    this.loadGroupMusicaux();
  }

  loadGroupMusicaux() {
    const apiEndpoint = this.apiUrl.replace('http://localhost:4200/', '');
    this.http.get(apiEndpoint + '/groups').subscribe((response: any) => {
      if (response && Array.isArray(response)) {
        this.groupMusicauxList = response; // Si response est déjà un tableau
      } else if (response && response.groupMusicauxArray) {
        this.groupMusicauxList = response.groupMusicauxArray; // Si les groupes musicaux sont dans une propriété "groupMusicauxArray"
      } else {
        console.log('Aucune donnée trouvée.');
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }

  uploadFile() {
    const formData = new FormData();
    console.log(this.selectedFile)
    formData.append('excelFile', this.selectedFile);
    const apiEndpoint = this.apiUrl.replace('http://localhost:4200/', '');
    this.http.post(apiEndpoint + '/import-file', formData).subscribe((response) => {
      this.loadGroupMusicaux();
    });
  }

  deleteGroup(groupId: number) {
    const apiEndpoint = this.apiUrl.replace('http://localhost:4200/', '');
    this.http.get(apiEndpoint + `/delete/${groupId}`).subscribe((response) => {
      this.groupMusicauxList = this.groupMusicauxList.filter(group => group.id !== groupId);
      this.loadGroupMusicaux();
    });
  }
}

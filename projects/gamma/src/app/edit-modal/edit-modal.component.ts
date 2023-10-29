import { Component, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() group: any;
  apiUrl = this.apiUrlService.getApiUrl();
  
  constructor(
    public activeModal: NgbActiveModal, 
    private http: HttpClient,
    private apiUrlService: ApiUrlService,
    ) {}

  onSubmit() {
    const apiEndpoint = this.apiUrl.replace('http://localhost:4200/', ''); // Replace with your API URL
    this.http.post(apiEndpoint + `/update/${this.group.id}`, this.group).subscribe((response) => {
      // Close the modal
      this.activeModal.close('Group updated');
    });
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  private apiUrl = environment.apiUrl; // Utilisez l'URL de l'environnement

  constructor(private http: HttpClient) {}
  
  getApiUrl() {
    return this.apiUrl;
  }

}
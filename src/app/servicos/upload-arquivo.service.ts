import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UploadArquivoService {
  private http = inject(HttpClient);
  private readonly url = environment.urlServidorUpload;

  uploadArquivo(arquivo: File): Observable<File> {
    const formData = new FormData();
    formData.append('file', arquivo);
    return this.http.post<File>(this.url, formData);
  }
}

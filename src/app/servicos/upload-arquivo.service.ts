import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadArquivoService {
  private http = inject(HttpClient);
  private readonly url = 'http://localhost:5022/upload';

  uploadArquivo(arquivo: File): Observable<Object> {
    const formData = new FormData();
    formData.append('file', arquivo);
    return this.http.post(this.url, formData);
  }
}

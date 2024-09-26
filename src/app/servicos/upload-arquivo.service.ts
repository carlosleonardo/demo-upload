import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadArquivoService {
  private http = inject(HttpClient);
  private readonly url = 'http://localhost:8080/upload';

  uploadArquivo(arquivo: File): void {
    const formData = new FormData();
    formData.append('file', arquivo);
    this.http.post(this.url, formData).subscribe();
  }
}

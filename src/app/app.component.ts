import { Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UploadArquivoService } from './servicos/upload-arquivo.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }
  arquivo: File = {} as File;
  arquivo$!: Observable<Object>;

  servicoUpload = inject(UploadArquivoService);
  inscricao: Subscription | undefined;

  onFileChange(e: Event) {
    const inputfiles = e.target as HTMLInputElement;

    console.log(inputfiles.files);
    if (inputfiles.files) this.arquivo = inputfiles.files[0];
  }

  aoEnviar(e: Event) {
    e.preventDefault();
    console.log(this.arquivo);
    this.arquivo$ = this.servicoUpload.uploadArquivo(this.arquivo);
    this.inscricao = this.arquivo$.subscribe((arquivo) => console.log(arquivo));
  }
  title = 'Demonstração de Upload';
}

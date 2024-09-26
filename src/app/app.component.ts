import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arquivos: string[] = [];

  onFileChange() {
    console.log(this.arquivos);
  }

  aoEnviar(e: Event) {
    e.preventDefault();
  }
  title = 'Demonstração de Upload';
}

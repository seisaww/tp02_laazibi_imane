import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1 } from './c1/c1';
import { C2 } from './c2/c2';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [C1, C2],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('tp02_laazibi_imane');
  pollution: any = null;
}

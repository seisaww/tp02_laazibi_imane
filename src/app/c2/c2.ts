import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c2',
  imports: [CommonModule],
  templateUrl: './c2.html',
  styleUrl: './c2.css'
})
export class C2 {
  @Input() pollution: any;
}

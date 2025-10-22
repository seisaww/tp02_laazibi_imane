import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pollution-recap',
  imports: [CommonModule],
  templateUrl: './pollution-recap.html',
  styleUrl: './pollution-recap.css'
})
export class PollutionRecap {
  @Input() pollution: any;
}

import { Component } from '@angular/core';
import {CustomPipePipe as SortNumbersPipe } from '../custom-pipe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-custom-pipe',
  standalone: true,
  imports: [SortNumbersPipe, CommonModule],
  templateUrl: './sort-custom-pipe.component.html',
  styleUrl: './sort-custom-pipe.component.css'
})
export class SortCustomPipeComponent {

  numbers: number[] = [3, 5, 1, 4, 2];
  sortOrder: 'asc' | 'desc' = 'asc';
  showList: boolean = false;

  showSorting() {
    this.showList = true;
  }

}

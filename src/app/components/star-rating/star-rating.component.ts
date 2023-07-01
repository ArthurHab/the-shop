import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating!: number;

  get stars(): boolean[] {
    const roundedRating = Math.round(this.rating);
    return Array(5).fill(false).map((_, index) => index < roundedRating);
  }
}

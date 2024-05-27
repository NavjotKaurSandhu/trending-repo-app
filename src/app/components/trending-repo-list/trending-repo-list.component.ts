import { Component, input } from '@angular/core';
import { IRepositories } from '../../interface/repositories.interface';
import { TrendingRepoDetailComponent } from '../trending-repo-detail/trending-repo-detail.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-trending-repo-list',
  standalone: true,
  imports: [TrendingRepoDetailComponent, MatCardModule],
  templateUrl: './trending-repo-list.component.html',
  styleUrl: './trending-repo-list.component.scss'
})
export class TrendingRepoListComponent {
  trendingRepoList = input.required<IRepositories[]>();
  selectedLanguage = input.required<string|null>();
}

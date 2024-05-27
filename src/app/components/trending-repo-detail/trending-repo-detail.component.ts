import { Component, OnInit, inject, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../../services/local-storage-service';
import { IRepositories } from '../../interface/repositories.interface';

@Component({
  selector: 'app-trending-repo-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './trending-repo-detail.component.html',
  styleUrl: './trending-repo-detail.component.scss',
})
export class TrendingRepoDetailComponent implements OnInit {
  localStorageService = inject(LocalStorageService);

  trendingRepo = input.required<IRepositories>();
  starredRepoList = signal<{ [key: string]: string }>({});

  ngOnInit(): void {
    this.starredRepoList.set({ ...this.starredRepo });
  }

  starRepo(repoId: number) {
    if (!(repoId in this.starredRepo)) {
      this.updateStarRepo(repoId);
    } else {
      this.removeStarRepo(repoId);
    }
  }

  private updateStarRepo(repoId: number) {
    const updatedStarredRepo = {
      [repoId]: repoId,
      ...this.starredRepo,
    };
    this.starredRepoList.update((repo) => {
      return { ...repo, ...updatedStarredRepo };
    });
    this.localStorageService.setItem(
      'starredRepo',
      JSON.stringify(this.starredRepoList())
    );
  }

  private removeStarRepo(repoId: number) {
    delete this.starredRepoList()[repoId];

    this.localStorageService.setItem(
      'starredRepo',
      JSON.stringify(this.starredRepoList())
    );
  }

  get starredRepo() {
    const starredRepo = this.localStorageService.getItem('starredRepo') || null;
    const starredRepoList = starredRepo ? JSON.parse(starredRepo) : {};

    return starredRepoList;
  }
}

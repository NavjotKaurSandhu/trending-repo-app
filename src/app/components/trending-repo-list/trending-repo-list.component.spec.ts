import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRepoListComponent } from './trending-repo-list.component';
import { REPOSITORIESLIST } from '../../../assets/mocks/repositories.mock';

describe('TrendingRepoListComponent', () => {
  let component: TrendingRepoListComponent;
  let fixture: ComponentFixture<TrendingRepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingRepoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingRepoListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('trendingRepoList', REPOSITORIESLIST.items);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list of repositories', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const repoDetailView = compiled.querySelector(
      '[data-test-id="trending-repo-detail"]'
    );
    expect(repoDetailView).toBeDefined();
  });

  it('should show message when list of repositories is empty and language filter is defined', () => {
    fixture.componentRef.setInput('trendingRepoList', []);
    fixture.componentRef.setInput('selectedLanguage', 'HTML');

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const emptyMessage = compiled.querySelector(
      '[data-test-id="trending-repo-empty-message"]'
    );
    expect(emptyMessage?.textContent).toBeDefined();
    expect(emptyMessage?.textContent).toContain(
      'It looks like we don’t have any trending repositories for HTML.'
    );
  });

  it('should show message when list of repositories is empty', () => {
    fixture.componentRef.setInput('trendingRepoList', []);
    fixture.componentRef.setInput('selectedLanguage', null);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const emptyMessage = compiled.querySelector(
      '[data-test-id="trending-repo-empty-message"]'
    );
    expect(emptyMessage?.textContent).toBeDefined();
    expect(emptyMessage?.textContent).toContain(
      'It looks like we don’t have any trending repositories.'
    );
  });
});

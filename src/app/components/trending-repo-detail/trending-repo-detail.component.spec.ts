import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingRepoDetailComponent } from './trending-repo-detail.component';
import { REPOSITORIESITEM } from '../../../assets/mocks/repositories.mock';
import { LocalStorageService } from '../../services/local-storage-service';

describe('TrendingRepoDetailComponent', () => {
  let component: TrendingRepoDetailComponent;
  let fixture: ComponentFixture<TrendingRepoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingRepoDetailComponent],
      providers: [
        {
          provide: LocalStorageService,
          useValue: {
            setItem: jest.fn(),
            getItem: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingRepoDetailComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('trendingRepo', REPOSITORIESITEM);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be selected as starred repo on click', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector(
      '[data-test-id="trending-repo-detail-header"]'
    )?.textContent;
    const starRepoButton = compiled.querySelector(
      '[data-test-id="trending-repo-detail-button"]'
    );

    expect(header).toContain(REPOSITORIESITEM.full_name);
    expect(starRepoButton?.textContent).toContain('Star');

    starRepoButton?.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.starredRepoList()).toEqual({
      [REPOSITORIESITEM.id]: REPOSITORIESITEM.id,
    });
    expect(starRepoButton?.textContent).toContain('Starred');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingRepoComponent } from './trending-repo.component';
import { AppService } from '../../services/app.service';
import { REPOSITORIESLIST } from '../../../assets/mocks/repositories.mock';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TrendingRepoComponent', () => {
  let component: TrendingRepoComponent;
  let fixture: ComponentFixture<TrendingRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingRepoComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: AppService,
          useValue: {
            getRepositories: jest.fn(() => of([REPOSITORIESLIST.items])),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show trending repo list', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-test-id="trending-repo-list"]')
    ).toBeTruthy();
  });
});

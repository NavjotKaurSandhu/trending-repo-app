import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppService } from './app.service';
import { REPOSITORIESLIST } from '../../assets/mocks/repositories.mock';
import { DatePipe } from '@angular/common';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe],
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of trending repositories', () => {
    const expectedResult = { ...REPOSITORIESLIST };

    service.getRepositories().subscribe((data) => {
      expect(data).toBe(expectedResult);
    });

    const req = httpMock.expectOne(
      `/search/repositories?q=created:>=2024-05-20&sort=stars&order=desc`
    );
    expect(req.request.method).toBe('GET');
    req.flush(expectedResult);
  });
});

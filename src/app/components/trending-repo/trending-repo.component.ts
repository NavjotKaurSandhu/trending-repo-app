import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';
import { IRepositories } from '../../interface/repositories.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FilterListPipe } from '../../pipes/filter-list.pipe';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { TrendingRepoListComponent } from '../trending-repo-list/trending-repo-list.component';
import { LANGUAGES } from '../../utils/languages';

@Component({
  selector: 'app-trending-repo',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    FilterListPipe,
    ReactiveFormsModule,
    JsonPipe,
    TrendingRepoListComponent
  ],
  templateUrl: './trending-repo.component.html',
  styleUrl: './trending-repo.component.scss',
})
export class TrendingRepoComponent {
  appService = inject(AppService);

  filterForm = new UntypedFormGroup({
    language: new UntypedFormControl(''),
  });
  languages = LANGUAGES;

  trendingRepoList$: Observable<IRepositories[]> =
    this.appService.getRepositories();

  get formValue() {
    return this.filterForm.getRawValue();
  }
}

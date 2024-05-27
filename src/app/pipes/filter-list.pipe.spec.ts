import { REPOSITORIESLIST } from '../../assets/mocks/repositories.mock';
import { FilterListPipe } from './filter-list.pipe';

describe('FilterListPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterListPipe();
    expect(pipe).toBeTruthy();
  });

  it('should give filtered list when language type filter matches with list', () => {
    const pipe = new FilterListPipe();
    const filterList = pipe.transform([...REPOSITORIESLIST.items], 'Python');
    expect(filterList.length).toBe(1);
  });

  it('should give empty list when language type filter does not match with list', () => {
    const pipe = new FilterListPipe();
    const filterList = pipe.transform([...REPOSITORIESLIST.items], 'HTML');
    expect(filterList.length).toBe(0);
  });

  it('should give list when language type filter is not defined', () => {
    const pipe = new FilterListPipe();
    const filterList = pipe.transform([...REPOSITORIESLIST.items], '');
    expect(filterList.length).toBe(1);
  });
});

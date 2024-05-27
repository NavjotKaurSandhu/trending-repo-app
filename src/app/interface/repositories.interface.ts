export interface IRepositoriesResponse {
  total_count?: number;
  incomplete_results?: boolean;
  items: IRepositories[];
}

export interface IRepositories {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  languages_url: string;
  keys_url: string;
  collaborators_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
}

import { Controller, Get, Query } from '@nestjs/common';
import { GithubApiService } from './github_api.service';

@Controller('github')
export class GithubApiController {

  constructor(private githubApiService: GithubApiService) {}

  @Get('branches')
  getBranches(): Promise<Array<string>> {
    return this.githubApiService.listRepositoryBranches()
  }
}

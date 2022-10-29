import { Controller, Get, Query } from '@nestjs/common';
import { GithubApiService } from './github_api.service';
import { Branch } from './branch/branch.interface'

@Controller('github')
export class GithubApiController {

  constructor(private githubApiService: GithubApiService) {}

  @Get('branches')
  getBranches(@Query() query): Promise<Branch[]> {
    return this.githubApiService.listRepositoryBranches(query.repository)
  }
}

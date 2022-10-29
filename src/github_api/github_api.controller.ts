import { Controller, Get, Query, Param } from '@nestjs/common';
import { GithubApiService } from './github_api.service';
import { Branch } from './branch/branch.interface';
import { Commit } from './commit/commit.interface'

@Controller('github')
export class GithubApiController {

  constructor(private githubApiService: GithubApiService) {}

  @Get('branches')
  getBranches(@Query() query): Promise<Branch[]> {
    return this.githubApiService.listRepositoryBranches(query.repository)
  }

  @Get('branches/:branch')
  getBranchCommits(@Param() param, @Query() query): Promise<Commit[]> {
    return this.githubApiService.listBranchCommits(query.repository, param.branch)
  }
}

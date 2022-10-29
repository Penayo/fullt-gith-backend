import { Controller, Get, Query, Param } from '@nestjs/common';
import { GithubApiService } from './github_api.service';
import { Branch } from './branch/branch';
import { Commit } from './commit/commit'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('github')
export class GithubApiController {

  constructor(private githubApiService: GithubApiService) {}

  @Get('branches')
  @ApiTags('branches')
  @ApiResponse({
    status: 200,
    description: 'Github repository branches',
    type: Branch
  })
  getBranches(@Query('repository') query): Promise<Branch[]> {
    return this.githubApiService.listRepositoryBranches(query.repository)
  }

  @Get('branches/:branch')
  @ApiTags('branches')
  @ApiResponse({
    status: 200,
    description: 'Github repository commit list',
    type: Commit,
  })
  getBranchCommits(@Param() param, @Query() query): Promise<Commit[]> {
    return this.githubApiService.listBranchCommits(query.repository, param.branch)
  }
}

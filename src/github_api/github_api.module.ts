import { Module } from '@nestjs/common';
import { GithubApiController } from './github_api.controller';
import { GithubApiService } from './github_api.service';

@Module({
  controllers: [GithubApiController],
  providers: [GithubApiService]
})
export class GithubApiModule {}

import { Injectable } from '@nestjs/common';
import { configService } from '../config/config.service'
import { Octokit } from 'octokit'

@Injectable()
export class GithubApiService {
  private readonly octokitClient = new Octokit({
    auth: configService.getGithubAuthToken()
  })

  async listRepositoryBranches(): Promise<Array<string>> {
    const { data } = await this.octokitClient.rest.repos.listBranches({
      owner: configService.getRepositoryOwner(),
      repo: 'fullt-gith-backend'
    })

    console.log('Data', data)
    return ['main', 'master', 'develop']
  }
}

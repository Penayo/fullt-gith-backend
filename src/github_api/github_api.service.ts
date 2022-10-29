import { Injectable } from '@nestjs/common';
import { configService } from '../config/config.service'
import { Octokit } from 'octokit'
import { Branch } from './branch/branch.interface'

@Injectable()
export class GithubApiService {
  private readonly octokitClient = new Octokit({
    auth: configService.getGithubAuthToken()
  })

  async listRepositoryBranches(repository: string): Promise<Branch[]> {
    const { data } = await this.octokitClient.rest.repos.listBranches({
      owner: configService.getRepositoryOwner(),
      repo: repository
    })

    return data.map(branch => ({ name: branch.name }))
  }
}

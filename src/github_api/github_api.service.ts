import { Injectable } from '@nestjs/common';
import { configService } from '../config/config.service'
import { Octokit } from 'octokit'
import { Branch } from './branch/branch'
import { Commit } from './commit/commit'

@Injectable()
export class GithubApiService {
  private readonly octokitClient = new Octokit({
    auth: configService.getGithubAuthToken()
  })

  /**
   * listRepositoryBranches - Get all branches of a given repository
   * @params {string} repository The repository to get the branches from
   * @return The list of branches from the given repository
   */
  async listRepositoryBranches(repository: string): Promise<Branch[]> {
    const { data } = await this.octokitClient.rest.repos.listBranches({
      owner: configService.getRepositoryOwner(),
      repo: repository
    })

    return data.map(branch => ({ name: branch.name }))
  }

  /**
   * listBranchCommits - Get all commists from a given respository and branch
   * @params {string} repository The repository to get the commits from
   * @params {string} banch The branch to get the commits fromDer
   * @return
   */
  async listBranchCommits (repository: string, branch: string): Promise<Commit[]> {
    const { data } = await this.octokitClient.rest.repos.listCommits({
      owner: configService.getRepositoryOwner(),
      repo: repository,
      sha: branch
    })

    const commits = data.map(commit => {
      const _commit = {
        id: commit.sha,
        author: commit.commit.author.name,
        author_id: commit.author.id,
        message: commit.commit.message,
        date: commit.commit.author.date
      }
      return _commit
    })

    return commits
  }
}

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

    const branches = data.map(d => {
      const branch = new Branch()
      branch.name = d.name
      return branch
    })

    return branches
  }

  /**
   * listBranchCommits - Get all commists from a given respository and branch
   * @params {string} repository The repository to get the commits from
   * @params {string} banch The branch to get the commits fromDer
   * @return
   */
  async listBranchCommits (repository: string, branch: string, page: number, per_page: number): Promise<Commit[]> {
    const { data } = await this.octokitClient.rest.repos.listCommits({
      owner: configService.getRepositoryOwner(),
      repo: repository,
      sha: branch,
      page,
      per_page
    })

    const commits = data.map(d => {
      const commit = new Commit()
      commit.id = d.sha
      commit.author = d.author.login
      commit.author_id = d.author.id
      commit.message = d.commit.message
      commit.date = d.commit.author.date

      return commit
    })

    return commits
  }
}

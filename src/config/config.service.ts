import { Injectable } from '@nestjs/common';

require('dotenv').config();
export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getRepositoryOwner() {
    return this.getValue('REPO_OWNER')
  }

  public getGithubAuthToken () {
    return this.getValue('GITHUB_PERSONAL_TOKEN')
  }
}

const configService = new ConfigService(process.env)
  .ensureValues([
    'GITHUB_PERSONAL_TOKEN'
  ]) ;

export { configService } ;

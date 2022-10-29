import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { GithubApiModule } from './github_api/github_api.module';

@Module({
  imports: [GithubApiModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

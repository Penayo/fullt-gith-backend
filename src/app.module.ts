import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from './config/config.service';
import { GithubApiModule } from './github_api/github_api.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      exclude: ['/api*'],
    }),
    GithubApiModule
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

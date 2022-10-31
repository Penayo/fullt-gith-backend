import { ApiProperty } from '@nestjs/swagger';

export class Branch {
  @ApiProperty({ description: 'Repository name' })
  name: string
}

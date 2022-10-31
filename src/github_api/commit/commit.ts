import { ApiProperty } from '@nestjs/swagger';

export class Commit {
  @ApiProperty()
  id: string

  @ApiProperty({ description: 'The author of the commit' })
  author: string

  @ApiProperty({ description: 'The author id of commit' })
  author_id: number

  @ApiProperty()
  message: string

  @ApiProperty({ description: 'The creation date', format: 'date' })
  date: string
}

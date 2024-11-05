import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'Hung Hoang',
    description: 'The name for the user',
  })
  name: string;
}

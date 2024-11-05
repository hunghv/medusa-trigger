import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from './entities/email.entity';
@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}
  create(createEmailDto: CreateEmailDto) {
    console.log(createEmailDto);
    return 'This action adds a new email';
  }

  async sendUserConfirmation(user: User, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation',
      context: {
        name: user.name,
        url: url,
      },
    });
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    console.log(updateEmailDto);
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}

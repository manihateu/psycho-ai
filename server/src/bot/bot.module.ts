import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [BotService],
  controllers: [BotController],
})
export class BotModule {}

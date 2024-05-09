import { PartialType } from '@nestjs/swagger';
import { CreateDailyMessageDto } from './create-daily-message.dto';

export class UpdateDailyMessageDto extends PartialType(CreateDailyMessageDto) {}

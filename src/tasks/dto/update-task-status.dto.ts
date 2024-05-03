import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.emum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Module({
  imports: [CpuModule, PowerModule],
  controllers: [ComputerController],
  providers: [CpuService, DiskService],
})
export class ComputerModule {}

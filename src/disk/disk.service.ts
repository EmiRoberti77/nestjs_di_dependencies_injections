import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  getData() {
    console.log('about to get 5 watts to spin disk');
    this.powerService.supplyPower(5);
    return 'data!';
  }
}

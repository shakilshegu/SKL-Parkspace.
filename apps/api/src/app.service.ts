import { Injectable } from '@nestjs/common';
import { add } from '@skl-autospace/sample-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + add(33, 44);
  }
}

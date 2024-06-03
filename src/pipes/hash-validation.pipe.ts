import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class HashValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'string') {
      throw new BadRequestException('The hash should be a string');
    }

    const hashRegex = /^0x[0-9a-fA-F]{64}$/;
    if (!hashRegex.test(value)) {
      throw new BadRequestException('Invalid hash format');
    }

    return value;
  }
}
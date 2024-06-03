import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
  } from '@nestjs/common';
  
  @Injectable()
  export class PositiveNumberPipe implements PipeTransform {
    transform(value: number, metadata: ArgumentMetadata) {
      return Math.abs(value);
    }
  }
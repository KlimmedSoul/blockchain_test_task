import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockSerivce } from './block.service';

@Module({
  imports: [],
  controllers: [BlockController],
  providers: [BlockSerivce],
})
export class BlockModule {}

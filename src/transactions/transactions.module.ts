import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsSerivce } from './transactions.service';

@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [TransactionsSerivce],
})
export class TransactionsModule {}

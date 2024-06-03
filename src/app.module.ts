import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './transactions/transactions.module';
import { BlockModule } from './block/block.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionsModule,
    BlockModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



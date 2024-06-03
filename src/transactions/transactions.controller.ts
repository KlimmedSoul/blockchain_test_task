import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { TransactionsSerivce } from './transactions.service';
import { ApiBadGatewayResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express'
import { HashValidationPipe } from 'src/pipes/hash-validation.pipe';
import { TTransactionInfo } from 'src/types/transactions/transaction-info.interface';
import { TransactionInfo } from 'src/swagger/transactions.swagger';

@ApiTags("Controller 'Transactions' (/transactions)")
@ApiBadGatewayResponse({
    status: 502,
    description: 'It comes back when the whole system is down',
    type: String,
})
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsSerivce: TransactionsSerivce) {}
/**
 * Transaction info by its hash
 * 
 * @param {number} hash - Transaction hash
 * @returns {Promise<Response<TTransactionInfo>>} - Returns information about the transaction by its hash
 */
  @Get()
  @ApiOperation({
    description: "Returns information about the transaction by its hash"
  })
  @ApiQuery({
    type: String,
    name: 'hash',
    required: true,
    example: "0xcd05bd794fa9363bae83959e529aa33e392a0659243b2c6a66c4b62f3ab5f9f9",
    description: "Transaction hash"
  })
  @ApiOkResponse({
    status: 200,
    description: 'Information about the transaction by its hash',
    type: TransactionInfo,
    isArray: false,
  })
  async getTransactionInfo(
    @Query('hash', 
    new HashValidationPipe()
    ) hash: string,
    @Res() response: Response,
  ): Promise<Response<TTransactionInfo>> { 
   try {
      const result:TTransactionInfo = await this.transactionsSerivce.getTransactionInfo(hash);
      return response.status(HttpStatus.OK).json(result);
   } catch(error) {
      console.error(error);
      return response.status(HttpStatus.BAD_REQUEST).json({message: error});
   }
  }
}

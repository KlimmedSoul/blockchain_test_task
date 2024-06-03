import { Injectable } from '@nestjs/common';
import { TTransactionInfo } from 'src/types/transactions/transaction-info.interface';

@Injectable()
export class TransactionsSerivce {
  async getTransactionInfo(
    hash: string
  ):Promise<TTransactionInfo> {
    try {
      const node = process.env.BLOCKCHAIN_NODE;
      const response = await fetch(node, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getTransactionByHash',
          params: [hash],
          id: 1
        })
      });
      const data = await response.json()
      const result: TTransactionInfo = {
        hash: hash,
        to: data.result.to,
        from: data.result.from,
        value: parseInt(data.result.value, 16) / 1_000_000_000_000_000_000,
        input: data.result.input,
        maxFeePerGas: parseInt(data.result.maxFeePerGas, 16) / 1_000_000_000,
        maxPriotityFeePerGas: parseInt(data.result.maxPriorityFeePerGas, 16) / 1_000_000_000,
        gasPrice: parseInt(data.result.gasPrice, 16) / 1_000_000_000
      };
      return result;
    } catch (e) {
      console.error(e);
      throw new Error(e.message);
    }
  }
}

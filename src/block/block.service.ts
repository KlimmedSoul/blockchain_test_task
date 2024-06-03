import { Injectable } from '@nestjs/common';
import { TBlockInfo } from 'src/types/block/block-info.interface';

@Injectable()
export class BlockSerivce {
  
  async getBlockInfo(
    height: number
  ):Promise<TBlockInfo> {
    try {
      const hexHeight = `0x${height.toString(16)}`
      const node = process.env.BLOCKCHAIN_NODE;
      const response = await fetch(node, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: [hexHeight, false],
          id: 1
        })
      });
      const data = await response.json()
      const result = {
        height: height,
        hash: data.result.hash,
        parentHash: data.result.parentHash,
        gasLimit: Number(parseInt(data.result.gasLimit, 16)),
        gasUsed: Number(parseInt(data.result.gasUsed, 16)),
        size: Number(parseInt(data.result.size, 16)) / 1000,
      };
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
}

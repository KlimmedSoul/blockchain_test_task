import { ApiProperty } from "@nestjs/swagger";
import { TTransactionInfo } from "src/types/transactions/transaction-info.interface";

export class TransactionInfo implements TTransactionInfo {
  @ApiProperty({
    type: String,
    example: '0xcd05bd794fa9363bae83959e529aa33e392a0659243b2c6a66c4b62f3ab5f9f9',
    description: 'Transaction hash'
  })
  hash: string;

  @ApiProperty({
    type: String,
    example: '0x4d224452801aced8b2f0aebe155379bb5d594381',
    description: 'To who'
  })
  to: string;

  @ApiProperty({
    type: String,
    example: '0x449857aba632c27f493a6138159d48b07d25ef6e',
    description: 'From who'
  })
  from: string;

  @ApiProperty({
    type: Number,
    example: 0,
    description: 'Value'
  })
  value: number;

  @ApiProperty({
    type: String,
    example: '0xa9059cbb000000000000000000000000449857aba632c27f493a6138159d48b07d25ef6e000000000000000000000000000000000000000000000000f09b648453f6cc00',
    description: 'Input'
  })
  input: string;

  @ApiProperty({
    type: Number,
    example: 22.167545871,
    description: 'the maximum amount in Gwei per unit of gas allocated for gas payment, including base fee and maxPriorityFeePerGas'
  })
  maxFeePerGas: number;

  @ApiProperty({
    type: Number,
    example: 0.001,
    description: 'Maximum price in Gwei of consumed gas to be included as a tip for the validator.'
  })
  maxPriotityFeePerGas: number;

  @ApiProperty({
    type: Number,
    example: 21.417397577,
    description: 'Gas price in Gwei'
  })
  gasPrice: number;
}
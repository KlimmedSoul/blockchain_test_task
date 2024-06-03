export interface TTransactionInfo {
  hash: string;
  to: string;
  from: string;
  value: number;
  input: string;
  maxFeePerGas: number;
  maxPriotityFeePerGas: number;
  gasPrice: number;
}
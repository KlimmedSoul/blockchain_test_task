import { ApiProperty } from "@nestjs/swagger";
import { TBlockInfo } from "src/types/block/block-info.interface";

export class BlockInfo implements TBlockInfo {
@ApiProperty({
  type: Number,
  description: "Block Height",
  example: 20012255
})
height: number;

@ApiProperty({
  type: String,
  description: "Block hash",
  example: "0xdebb402dcccf9ef03e3f633cc5c271651e7eb90c4b203edcfc3855d60322ae90"
})
hash: string;

@ApiProperty({
  type: String,
  description: "Parent hash",
  example: "0xebb26f436ce9533a66ab4086d8cf835c387723bda033cc31d6ca99223f331fbf"
})
parentHash: string;

@ApiProperty({
  type: Number,
  description: "Gas limit",
  example: 30000000
})
gasLimit: number;

@ApiProperty({
  type: Number,
  description: "Gas used",
  example: 11083039
})
gasUsed: number;

@ApiProperty({
  type: Number,
  description: "Size in bytes",
  example: 54.389
})
size: number;
}
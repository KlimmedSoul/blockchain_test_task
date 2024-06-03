import { Controller, Get, HttpStatus, ParseIntPipe, Query, Res } from '@nestjs/common';
import { BlockSerivce } from './block.service';
import { ApiBadGatewayResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express'
import { PositiveNumberPipe } from 'src/pipes/positive-numbers.pipe';
import { TBlockInfo } from 'src/types/block/block-info.interface';
import { BlockInfo } from 'src/swagger/block.swagger';

@ApiTags("Controller 'Block' (/block)")
@ApiBadGatewayResponse({
    status: 502,
    description: 'It comes back when the whole system is down',
    type: String,
})
@Controller('block')
export class BlockController {
  constructor(private readonly blockSerivce: BlockSerivce) {}
/**
 * Block info by its number
 * 
 * @param {number} height - block height
 * @returns {Promise<Response<TBlockInfo>>} - Returns information about the block by its number
 */
  @Get()
  @ApiOperation({
    description: "Returns information about the block by its number"
  })
  @ApiQuery({
    type: Number,
    name: 'height',
    required: true,
    example: 20012255,
    description: "Block height"
  })
  @ApiOkResponse({
    status: 200,
    description: 'Information about the block by its number',
    type: BlockInfo,
    isArray: false,
  })
  async getBlockInfo(
    @Query('height', 
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
      new PositiveNumberPipe(),
    ) height: number,
    @Res() response: Response,
  ): Promise<Response<TBlockInfo>> {
   try {
      const result:TBlockInfo = await this.blockSerivce.getBlockInfo(height);
      return response.status(HttpStatus.OK).json(result);
   } catch(error) {
      console.error(error);
      return response.status(HttpStatus.BAD_REQUEST).json({message: error});
   }
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItem } from './entities/order-items.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OrderItems')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() orderItem: OrderItem) {
    return this.orderItemsService.create(orderItem);
  }

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() orderItem: OrderItem) {
    return this.orderItemsService.update(+id, orderItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-items.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
  ) {}

  findAll(): Promise<OrderItem[]> {
    return this.orderItemsRepository.find();
  }

  findOne(id: number): Promise<OrderItem> {
    return this.orderItemsRepository.findOneBy({ order_item_id: id });
  }

  create(orderItem: OrderItem): Promise<OrderItem> {
    return this.orderItemsRepository.save(orderItem);
  }

  async update(id: number, orderItem: OrderItem): Promise<OrderItem> {
    await this.orderItemsRepository.update(id, orderItem);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.orderItemsRepository.delete(id);
  }
}

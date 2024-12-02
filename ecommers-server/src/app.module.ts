import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrderItem } from './order-items/entities/order-items.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/products.entity';
import { Category } from './categories/entities/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ecommerce',
      autoLoadEntities: false,
      entities: [User, Order, OrderItem, Product, Category],
      synchronize: false, // Automatically sync entities with the database (turn off in production)
    }),
    UsersModule,
    CategoriesModule,
    OrdersModule,
    OrderItemsModule,
    ProductsModule,
  ],
})
export class AppModule {}

import { Product } from "src/product/product.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  customer: User;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal')
  total: number;
}

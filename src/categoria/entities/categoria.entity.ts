import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produtos } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Produtos, (produtos) => produtos.categoria, {
    onDelete: 'CASCADE',
  })
  Produtos: Produtos;
}

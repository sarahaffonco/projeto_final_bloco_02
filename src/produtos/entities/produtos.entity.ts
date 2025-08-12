import { Categoria } from './../../categoria/entities/categoria.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', nullable: false })
  preco: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.Produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}

import { Categoria } from './../../categoria/entities/categoria.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  preco: number;

  @OneToMany(() => Categoria, (categoria) => categoria.Produtos)
  categoria: Categoria[];
}

import { Produtos } from './entities/produtos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}

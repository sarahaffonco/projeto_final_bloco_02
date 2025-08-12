import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from '../entities/produtos.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      relations: { categoria: true },
    });
  }

  async findByNome(nome: string): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      where: { nome },
      relations: {
        categoria: true,
      },
    });
  }

  async findByPreco(preco: number): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      where: { preco },
      relations: {
        categoria: true,
      },
    });
  }
  async findById(id: number): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: {
        id,
      },
    });

    if (!produto) {
      throw new HttpException(
        `Produto com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return produto;
  }

  async create(produto: Produtos): Promise<Produtos> {
    return await this.produtosRepository.save(produto);
  }

  async update(produto: Produtos): Promise<Produtos> {
    await this.findById(produto.id);
    return await this.produtosRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtosRepository.delete(id);
  }
}

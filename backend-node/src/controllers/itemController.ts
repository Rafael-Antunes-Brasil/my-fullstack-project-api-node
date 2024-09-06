import { Request, Response } from 'express';
import Item from '../models/item';

// Obtém todos os itens
export const getAllItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

// Cria um novo item
export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    // Cria o item com base no corpo da requisição
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

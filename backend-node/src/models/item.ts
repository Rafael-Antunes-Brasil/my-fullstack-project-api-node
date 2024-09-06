import { DataTypes, Model, Optional } from 'sequelize';

interface ItemAttributes {
  id?: number;
  name: string;
  description?: string;
}

interface ItemCreationAttributes extends Optional<ItemAttributes, 'id'> {}

class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
  public id!: number;
  public name!: string;
  public description?: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'items',
})

export default Item;

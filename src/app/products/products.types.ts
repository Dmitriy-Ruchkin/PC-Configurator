
// eslint-disable-next-line no-shadow
export enum ProductsTypes {
  Case = 'Корпус',
  CPU = 'Процессор',
  MainBoard = 'Материнская плата',
  VideoCard = 'Видеокарта',
  SystemMemory = 'Оперативная память',
  HardDisc = 'Жесткий диск',
  SoundCard = 'Звуковая карта',
  PowerSupplyUnit = 'Блок питания',
  CPUCooler = 'Система охлаждения'
}


export interface IProduct {
  type: string
  id: string
  name: string
  price: number
  imageURL: string
  description: string
}

export interface IVideoCard {
  name: string
  length: number,
  memoryCapacity: string
  price: number
}

export interface ICase {
  name: string
  size: string
  price: number
  videoCardMaxLength: number;
}

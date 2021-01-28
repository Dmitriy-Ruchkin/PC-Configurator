
// eslint-disable-next-line no-shadow
export enum ProductsTypes {
  Case = 'Корпус',
  Processors = 'Процессор',
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
  imageUrl: string
  description: string
}

export interface IVideoCard {
  name: string
  memoryCapacity: string
  price: number
}

export interface ICase {
  name: string
  size: string
  price: number
}

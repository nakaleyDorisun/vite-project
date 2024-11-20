import { v4 as uuidv4 } from "uuid";

export interface IBeers {
  id: number;
  title: string;
  isInStock: boolean;
  completed?: boolean;
}

export const beers: IBeers[] = [
  {
    id: +uuidv4(),
    title: 'Пиво "Калнапилис Оригинал" пастер. светлое фильтр. ж/б 0,568л 5%',
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: 'Пиво "Калнапилис Пилснер" пастер. светлое фильтр. ж/б 0,568л 4,6%',
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Corona Cero 0,0% б/а 0,33 Мексика",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Калнапилис Вайт Селект светлое н/фильтр. ж/б 0,568л 5%",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Напиток пивной Сан Пьерр Бланш 5,0% 0,5л ж/б Бельгия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Напиток пивной Сан Пьерр Блонд 6,5% 0,5л ж/б Бельгия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Напиток пивной Сан Пьерр Брюн 6,5% 0,5л ж/б Бельгия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пивной напиток Гентс Строп 6,9% 0,33 Бельгия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пивной напиток Ребелс Строп 6,9% 0,33 Бельгия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Вайсбир Хель 0,5л б/а Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Вайсбир Хель 5,3% 0,5л Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Мозер Лизель 5,3% 0,5л Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Пилзнер 4,9% 0,5л Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Урфасс 5,2% 0,5л Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Аркоброй Урфасс Алкофрай б/а 0,5л Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Гротверг Вайсбир 4,9% 0,5 л ж/б Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Датч Виндмилл 4,6% 0,5л ж/б Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Пражечка Злата 4,9% 0.5л ж/б Чехия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Староческе Традични 4,7% ст/б 0,5л Чехия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Староческе Традични темн. 4,8% 0,5л ж/б Чехия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Фленсбургер Вайцен 5,1% 0,33 Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Фленсбургер Вайцен 5,1% 0,5л",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Фленсбургер Голд 4,8% 0,33 Германия",
    isInStock: true,
  },
  { id: +uuidv4(), title: "Пиво Фленсбургер Голд 4,8% 0,5л", isInStock: true },
  {
    id: +uuidv4(),
    title: "Пиво Фленсбургер Дункель 4,8% 0,33 Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Фленсбургер Пилснер ж/б 4,8% 0,5л",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Сидр Stowford Press п/сух 4,5% ж/б 0,5л Великобритания",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Сидр Strongbow Яблочный п/сух 5,0% ж/б 0,44 Великобритания",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Айингер Альтьбайриш Дункель темн 5% 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title:
      "Пиво Айингер Бройвайссе светл 5,1% пшеничное н/ф 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Айингер Келлербир светл 4,9% н/ф 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Айингер Лагер Хелль светл. 4,9% фильтр. 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Айингер Столетнее светл. 5,5% фильтр. 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title:
      "Пиво Айингер Урвайссе темн. 5,8% пшеничное н/ф 0,5 бут. шт Германия",
    isInStock: true,
  },
  {
    id: +uuidv4(),
    title: "Пиво Айингер Целебратор темное 6,7% 0,33 бут. шт Германия",
    isInStock: true,
  },
];

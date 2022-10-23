import { Patient } from './types';

const patients: Patient[] = [
  {
    id: '1',
    name: 'Ростислав Сахаров',
    scans: [
      {
        type: 'рука',
        img: './dataset/arm/1.jpg',
      },
      {
        type: 'туловище',
        img: './dataset/chest/1.jpeg',
      },
      {
        type: 'голова',
        img: './dataset/head/1.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Александр Бирюков',
    scans: [
      {
        type: 'рука',
        img: './dataset/arm/2.jpg',
      },
      {
        type: 'туловище',
        img: './dataset/chest/2.jpeg',
      },
      {
        type: 'голова',
        img: './dataset/head/2.jpg',
      },
    ],
  },
  {
    id: '3',
    name: 'Фёдор Давыдов',
    scans: [
      {
        type: 'рука',
        img: './dataset/arm/3.jpg',
      },
      {
        type: 'туловище',
        img: './dataset/chest/3.jpeg',
      },
      {
        type: 'голова',
        img: './dataset/head/3.jpg',
      },
    ],
  },
  {
    id: '4',
    name: 'Анна Кудряшова',
    scans: [
      {
        type: 'рука',
        img: './dataset/arm/4.jpeg',
      },
      {
        type: 'туловище',
        img: './dataset/chest/4.jpeg',
      },
      {
        type: 'голова',
        img: './dataset/head/4.jpg',
      },
    ],
  },
  {
    id: '5',
    name: 'Злата Соколова',
    scans: [
      {
        type: 'рука',
        img: './dataset/arm/5.jpg',
      },
      {
        type: 'туловище',
        img: './dataset/chest/5.jpeg',
      },
      {
        type: 'голова',
        img: './dataset/head/5.jpg',
      },
    ],
  },
];

export default patients;

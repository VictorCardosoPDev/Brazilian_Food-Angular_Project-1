import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { Origins } from '../shared/models/Origins';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) :Food{

    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) : Food[]{

    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }
  
  
  getAllTags():Tag[]{
    return [

      {name:'Tudo'},
      {name:'Sul do Brasil'},
      {name:'Rio de Janeiro'},
      {name:'Espírito Santo'},
      {name:'Nordeste'},
      {name:'Bahia'},
    ];
  }
  getAllFoodsByTag(tag:string): Food[]{

    return tag == "Tudo" ? //Aqui seria um If
    this.getAll() : //Aqui seria um else
    this.getAll().filter(food =>food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Churrasco',
        cookTime: '60-120',
        price: 40.00,
        information:['Cortes de carne grelhados, tradição no sul do Brasil.'],
        origins: ['Sul do Brasil'],
        stars: 0,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['Sul do Brasil'],
      },
      {
        id: 2,
        name: 'Feijoada',
        price: 20,
        information:['Prato à base de feijão preto e carnes variadas, tradicionalmente servido com arroz, couve refogada, farofa e laranja'],
        cookTime: '180-240',
        origins: ['Rio de Janeiro'],
        stars: 0,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['Rio de Janeiro'],
      },
      {
        id: 3,
        name: 'Arroz Carreteiro',
        price: 25.00,
        information:['Prato típico do sul, feito com arroz, carne de charque ou carne-seca.'],
        cookTime: '40-60',
        origins: ['Sul do Brasil'],
        stars: 0,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['Sul do Brasil'],
      },
      {
        id: 4,
        name: 'Moqueca',
        price: 40,
        information:['Um ensopado de peixe ou frutos do mar, cozido com leite de coco, azeite de dendê e temperos.'],
        cookTime: '40-60',
        origins: ['Espírito Santo'],
        stars: 0,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['Espírito Santo'],
      },
      {
        id: 5,
        name: 'Escondidinho',
        price: 25,
        information:[' Prato preparado com purê de batata e recheado com carne-seca.'],
        cookTime: '60',
        origins: ['Nordeste'],
        stars: 0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['Nordeste'],
      },
      {
        id: 6,
        name: 'Bobó de camarão',
        price: 35,
        information:['Prato à base de purê de mandioca, leite de coco, azeite de dendê e camarão, típico da Bahia.'],
        cookTime: '60',
        origins: ['Bahia'],
        stars: 0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['Bahia'],
      },
      {
        id: 7,
        name: 'Tapioca',
        price: 12,
        information:['Massa feita de goma de mandioca, recheada com opções doces ou salgadas, muito comum no nordeste'],
        cookTime: '10-15',
        origins: ['Nordeste'],
        stars: 0,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['Nordeste'],
      },
      {
        id: 8,
        name: 'Acarajé',
        price: 10,
        information:['Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá e camarão.'],
        cookTime: '30',
        origins: ['Bahia'],
        stars: 4.0,
        imageUrl: '/assets/images/food-8.jpg',
        tags: ['Bahia'],
      },
      {
        id: 9,
        name: 'Vatapá',
        price: 25,
        information:['Creme à base de pão, camarão seco, leite de coco, amendoim e azeite de dendê'],
        cookTime: '60',
        origins: ['Bahia'],
        stars: 4.0,
        imageUrl: '/assets/images/food-9.jpg',
        tags: ['Bahia'],
      },
    ]
  }
}

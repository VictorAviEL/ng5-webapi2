import { Stockholder } from './stockholder';
import { Director } from './director';

export class Entity {
  id: number;
  name: string;
  form: string;
  address: string;
  dissolue: boolean;
  date_creation: string;
  date_fiscal: string;
  activities: string;
  stockholders: Array<Stockholder>;
  directors: Array<Director>;


   constructor(){

   }






}

import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entities = [
      
            {
              id: 1,
              name: "Bonbon gummies jelly",
              form: "Sweeties",
              address: "America",
              dissolue: true,
              date_creation: "2018-02-18",
              date_fiscal: "2019",
              activities: "Apple pie jujubes tootsie roll cookie",
              stockholders: [{percent: 100, name: "Macaroon"}],
              directors: [{role: "CEO",  name: "Pie"}]
              },

              {
                id: 2,
                name: "Brownie cake",
                form: "Sweeties",
                address: "America",
                dissolue: true,
                date_creation: "2018-02-18",
                date_fiscal: "2019",
                activities: "Apple pie jujubes tootsie roll cookie",
                stockholders: [{percent: 100, name: "Macaroon"}],
                directors: [{role: "CEO",  name: "Pie"}]
                },

                {
                  id: 3,
                  name: "Chupa chups",
                  form: "Sweeties",
                  address: "America",
                  dissolue: true,
                  date_creation: "2018-02-18",
                  date_fiscal: "2019",
                  activities: "Apple pie jujubes tootsie roll cookie",
                  stockholders: [{percent: 100, name: "Macaroon"}],
                  directors: [{role: "CEO",  name: "Pie"}]
                  }  




    ];
    return {entities};
  }
}





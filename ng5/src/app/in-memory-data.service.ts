import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entities = [
      
            {
              id: 1,
              name: "Bonbon gummies jelly2",
              form: "Sweeties",
              address: "America",
              dissolue: false,
              date_creation: "2018-02-18",
              date_fiscal: "2019",
              activities: "Apple pie jujubes tootsie roll cookie",
              stockholders: [{"id":1, "percent": 100, "name": "Macaroon"}, {"id":2, "percent": 80, "name": "Kitkat"}],
              directors: [{"id":1,"role": "CEO",  "name": "Pie"}]
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
                stockholders: [{"id":1,"percent": 100, "name": "Macaroon"}],
                directors: [{"id":1,"role": "CEO",  "name": "Pie"}]
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
                  stockholders: [{"id":1,"percent": 100, "name": "Macaroon"}],
                  directors: [{"id":1,"role": "CEO",  "name": "Pie"}]
                  }  

    ];
    return {entities};
  }
}





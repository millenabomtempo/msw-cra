import { http,  HttpResponse } from 'msw'
import { ENDPOINTS } from '../services/endpoints'

const Users = [
  http.get(`http://localhost:3000/api${ENDPOINTS.users}`, () => {
    return HttpResponse.json(Array.from({length: 10}, (_, index) => (
      {
        id: index + 1,
        nome: `Usuário ${index + 1}`,
      }
    )))
  }),
]


export const handlers = [
  ...Users
]

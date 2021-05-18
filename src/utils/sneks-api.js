import request from 'superagent';

const URL = '/api/snekss';

export async function getSneks() {
  const response = await request.get(URL);
  return response.body;
}

export async function getSnek(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addSnek(snek) {
  const response = await request.post(URL).send(snek);
  return response.body;
}

export async function deleteSnek(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateSnek(snek) {
  const response = await request.put(`${URL}/${snek.id}`).send(snek);
  return response.body;
}
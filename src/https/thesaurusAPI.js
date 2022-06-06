const baseURL = 'http://localhost:1234';
export const getConceptByWord = async (word) => {
  const response = await  fetch(`${baseURL}/thesaurus/word?word=${word}`,
    {method: 'GET', headers: {
        'Content-Type': 'application/json-patch+json',
      },})
  return response.json();
}
export const getConceptById = async (id) => {
  const response = await  fetch(`${baseURL}/thesaurus/word/${id}`,
    {method: 'GET', headers: {
        'Content-Type': 'application/json-patch+json',
      },})
  return response.json();
}

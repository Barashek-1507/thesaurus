const baseURL = 'http://localhost:1252';
export const getConceptByWord = async (word) => {
  const response = await  fetch(`${baseURL}/thesaurus/word?word=${word}`,
    {method: 'GET', headers: {
        'Content-Type': 'application/json-patch+json',
      },})
  return response.json();
}

export const getAll = async () => {
    const response = await  fetch(`${baseURL}/thesaurus/`,
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
export const getThesaurusPart = async (id) => {
    const response = await  fetch(`${baseURL}/thesaurus/part/${id}`,
        {method: 'GET', headers: {
                'Content-Type': 'application/json-patch+json',
            },})
    return response.json();
}

export const editThesaurusElem = async (id, concept) => {
    await fetch(`${baseURL}/thesaurus/${id}`,
        {
            method: "PUT", body: JSON.stringify(concept), headers: {
                'Content-Type': 'application/json',
            }
        })
}

export const postConcept = async (concept) => {
    await fetch(`${baseURL}/thesaurus/`,
        {
            method: "POST", body: JSON.stringify(concept), headers: {
                'Content-Type': 'application/json',
            }
        })
}

export const getByAuthor = async (author_id) => {
    const response = await fetch(`${baseURL}/thesaurus/author/${author_id}`,
        {
            method: "GET", headers: {
                'Content-Type': 'application/json',
            }
        })
    return response.json()
}


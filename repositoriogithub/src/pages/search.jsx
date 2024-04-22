async function searchRepository(repoName) {
    try {
      const response = await api.get(`./services/api`, {
        params: {
          q: repoName,
        },
      });
  
      return response.data.items; // A API retorna uma lista de repositórios
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      throw error;
    }
  }
  
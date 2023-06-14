async function conectarConAPI(_method, URL ) {

  try {
      const response = await fetch(URL, {
        method: _method
      });
      const data = await response.json();
  
      console.log(data);
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      console.error('Error al conectarse a la API:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al conectarse a la API' })
      };
    }
}

export const lambdaHandlerPersonajes = async (event, context) => {

  const personajes = await conectarConAPI("GET","https://harry-potter-api.onrender.com/personajes");

  return personajes
  
};
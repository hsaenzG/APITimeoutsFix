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


export const lambdaHandlerInfo = async (event, context) => {

  const info = await conectarConAPI("GET","https://harry-potter-api.onrender.com/Info");

  const infoFormated = { "info" : info.body }
  const response =  { "data" : event.concat(infoFormated)} ;
  return response
  
};
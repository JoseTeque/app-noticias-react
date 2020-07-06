import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoNoticias from './componentes/ListadoNoticias'


function App() {

  const [categoria, setcategoria] = useState('');
  const [noticias, setnoticias] = useState([]);

  useEffect(() => {

    const consultaApi = async () => {

      const ApiKey = '19b2125a57b249c499b1210ed634fee1'
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${ApiKey}`;

      const consulta = await fetch(url);
      const noticias = await consulta.json();

      setnoticias(noticias.articles);

    }

    consultaApi();

  }, [categoria, setnoticias])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>

      <div className="container white">
        <Formulario
          setcategoria = {setcategoria}
         />
         <ListadoNoticias noticias = {noticias}/>
      </div>
    </Fragment>
  );
}

export default App;

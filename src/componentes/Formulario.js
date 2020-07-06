import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setcategoria}) => {

    const Opciones = [
        {value:'general' , label:'General'},
        {value:'business' , label:'Negocio'},
        {value:'entertainment' , label:'Entretenimiento'},
        {value:'health' , label:'Salud'},
        {value:'science' , label:'Ciencias'},
        {value:'sports' , label:'Deportes'},
        {value:'technology' , label:'Tecnologia'}
    ]

    // utilizar Custom hooks
    const [categoria, SelectNoticias] = useSelect('general', Opciones);

    const handleSubmit = e => {
        e.preventDefault();
        setcategoria(categoria)
    
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">

                <form 
                    onSubmit = {handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>

            </div>

        </div>
     );
}
 
Formulario.propTypes = {
    setcategoria: PropTypes.func.isRequired
}

export default Formulario;
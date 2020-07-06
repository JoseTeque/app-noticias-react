import React, {useState} from 'react';

const useSelect = (stateInicial, Opciones) => {

    const [state, setstate] = useState(stateInicial);
   
    const SelectNoticias = () => (

        <select 
            className="browser-default" 
            value={state}
            onChange= {e => setstate(e.target.value)}
        >
        
            {Opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value} >{opcion.label}</option>
            ))}

        </select>
    );

    return[state, SelectNoticias];
}
 
export default useSelect;
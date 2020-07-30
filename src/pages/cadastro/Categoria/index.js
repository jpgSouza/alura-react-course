import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'), event.target.value
        )
    }

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infos) {
                infos.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)

            }}>

                <FormField
                    label="Nome da Categoria"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                    type="text"
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField
                    label="Cor"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                    type="color"
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
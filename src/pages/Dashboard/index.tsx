import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositório no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repositories">
          <img
            src="https://avatars1.githubusercontent.com/u/42756551?s=460&u=e4475ddca2f9c544b67ea619c636d50512d54be0&v=4"
            alt="Ricardo"
          />
          <div>
            <strong>Ricardo</strong>
            <p>Esse repo tem com a finalidade de estudar igual um sequelado</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositories">
          <img
            src="https://avatars1.githubusercontent.com/u/42756551?s=460&u=e4475ddca2f9c544b67ea619c636d50512d54be0&v=4"
            alt="Ricardo"
          />
          <div>
            <strong>Ricardo</strong>
            <p>Esse repo tem com a finalidade de estudar igual um sequelado</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositories">
          <img
            src="https://avatars1.githubusercontent.com/u/42756551?s=460&u=e4475ddca2f9c544b67ea619c636d50512d54be0&v=4"
            alt="Ricardo"
          />
          <div>
            <strong>Ricardo</strong>
            <p>Esse repo tem com a finalidade de estudar igual um sequelado</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositories">
          <img
            src="https://avatars1.githubusercontent.com/u/42756551?s=460&u=e4475ddca2f9c544b67ea619c636d50512d54be0&v=4"
            alt="Ricardo"
          />
          <div>
            <strong>Ricardo</strong>
            <p>Esse repo tem com a finalidade de estudar igual um sequelado</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

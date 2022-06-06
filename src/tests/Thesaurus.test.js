import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import { render } from 'react-dom';
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import Thesaurus from '../components/Thesaurus'

const data = {
  name: '...',
  children: [
    {
      name: 'Хордовые',
      children: [
        {
          name: 'Земноводные',
          children: [
            {
              name: 'Будьдог',
            },
            {
              name: 'Шпиц',
            },
          ],

        },{
          name: 'Рыбы',
          children: [
            {
              name: 'Будьдог',
            },
            {
              name: 'Шпиц',
            },
          ],

        },{
          name: 'Млекопитающие',
          children: [
            {
              name: 'Хищные',
              children: [
                {
                  name: 'Псовые',
                  children: [
                    {
                      name: 'Собака',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Грызуны',
              children: [
                {
                  name: 'Заячьи',
                  children: [
                    {
                      name: 'Кролик',
                    },
                  ],
                },
                {
                  name: 'Беличьи',
                },
              ],
            },
          ],

        },
      ]},                   {
      name: 'Членистоногие',
      children: [
        {
          name: 'Насекомые',
        },
        {
          name: 'Паукообразные',
        },
      ],
    },{
      name: 'Черви',
    }
  ]}

const TestingThesaurus = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Thesaurus data={data}/>
    </Provider>
  </BrowserRouter>
);
describe('Thesaurus component', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <TestingThesaurus/>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

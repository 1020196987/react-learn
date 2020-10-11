import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

Enzyme.configure({ adapter: new Adapter()});

describe('button 测试', () => {
    const wrapper = shallow(<Button></Button>);
    // test('快照', () => {
    //     expect(wrapper.render()).toMatchSnapshot();
    // });
    test('测试button文字', () => {
        expect(wrapper.find('div').text()).toEqual('button');
    })
})
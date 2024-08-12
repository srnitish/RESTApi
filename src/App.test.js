import React from 'react';
import { shallow } from 'enzyme';
import app from './app';
// import axios from 'axios';

// jest.mock('axios');

// describe('UserData', () => {
//   it('displays user data fetched from API', async () => {
//     // Mock data to be returned by Axios
//     const mockUserData = {
//       user: 'Leanne Graham'
//     };

//     // Mock Axios get method to return a resolved promise with mock data
//     axios.get.mockResolvedValueOnce({ data: mockUserData });

//     // Render the component
//     const wrapper = shallow(<RealUser/>);

//     // Wait for the component to update after fetching data
//     await Promise.resolve();

//     // Update the wrapper to reflect changes after data fetching
//     wrapper.update();

//     // Assertions
//     expect(wrapper.text()).toContain('Name: Leanne Graham');
//     // expect(wrapper.text()).toContain('Email: john@example.com');
//   });
// });



// function sum(a, b) {
//     return a + b;
// }

// test("To check that sum is working properly", () => {
//     const result = sum(3, 4);
//     expect(result).toBe(7);
// });

// const result = sum(3, 4);
// console.log(result);

test("To check Meals Component is Mounted in the DOM or not", () => {
    const component = shallow( <App/> )
    const realuser = component.find('Meals').exist()
    expect(realuser).toBe(true);
})
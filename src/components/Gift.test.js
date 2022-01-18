import React from "react";
import { shallow } from "enzyme";
import Gift from './Gift';
import App from "./App";

describe('Gift', () => {
    const mockRemoveGift = jest.fn();
    const id = 1;
    const props = {gift: {id}, removeGift: mockRemoveGift}
    const gift = shallow(<Gift {...props} />);

    it('renders correctly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initialize empty string for the both states: person and present', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    });

    describe('while typing the person input', () => {
        const person = 'Uncle';
        beforeEach(() => {
            gift.find("[data-test='person-input']").simulate('change', { target: { value: person } })
        });

        it('update person state', () => {
            expect(gift.state().person).toEqual(person)
        });
    });

    describe('while typing the present input', () => {
        const present = 'bunny';
        beforeEach(() => {
            gift.find("[data-test='present-input']").simulate('change', { target: { value: present } })
        });

        it('update present state', () => {
            expect(gift.state().present).toEqual(present)
        });
    });

    describe('when clicking the `remove btn`', () => {
        beforeEach(() => {
            gift.find("[data-test='remove-button']").simulate('click');
        })

        test('remove gift', () => {
            expect(mockRemoveGift).toHaveBeenCalledWith(id)
        })
    })

})
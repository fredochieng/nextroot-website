// tests/unit/index.spec.js
import { mount } from '@vue/test-utils';
import Index from '@/pages/index.vue';
import HeaderThree from '~/layouts/headers/HeaderThree.vue';
import FooterOne from '~/layouts/footers/FooterOne.vue';

jest.mock('gsap', () => ({
    registerPlugin: jest.fn(),
    to: jest.fn(),
}));

jest.mock('wow.js', () => ({
    default: jest.fn().mockImplementation(() => ({
        init: jest.fn(),
    })),
}));

describe('Index.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Index, {
            global: {
                stubs: {
                    HeaderThree: true,
                    FooterOne: true,
                    CommonScrollTop: true,
                    HeroBannerHeroAreaHomeThree: true,
                    CounterAreaHomeThree: true,
                    PaymentTpPaymentAreaHomeTwo: true,
                    BusinessBoxHomeFive: true,
                },
            },
        });
    });

    it('renders HeaderThree component', () => {
        expect(wrapper.findComponent(HeaderThree).exists()).toBe(true);
    });

    it('renders FooterOne component', () => {
        expect(wrapper.findComponent(FooterOne).exists()).toBe(true);
    });

    it('renders smooth-wrapper and smooth-content divs', () => {
        expect(wrapper.find('#smooth-wrapper').exists()).toBe(true);
        expect(wrapper.find('#smooth-content').exists()).toBe(true);
    });
});

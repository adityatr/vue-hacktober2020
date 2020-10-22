import { shallowMount } from '@vue/test-utils';
import RealComponent from '@/components/RealComponent.vue';

describe('the greatest component the world has ever seen', () => {
    it('should be friggin amazing', () => {
        const adjective = 'amazing';
        const wrapper = shallowMount(RealComponent, {
            props: { adjective }
          })
        expect(wrapper.text()).toMatch(`this component it ${adjective}`)
    })
})
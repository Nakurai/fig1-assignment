import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import feedsort from '@/components/Feed-sort.vue'

describe('Feed-sort.vue', () => {
  it('emit input event when filter or sort data change', () => {
    const wrapper = mount(feedsort);
    wrapper.setData({filter:'test'});
    // assert event has been emitted
    expect(wrapper.emitted().input.length).to.equal(1);
  })
})

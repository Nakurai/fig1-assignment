import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feed:[],
    nextLink:''
  },
  getters:{
    /*
    this is a getter dealing with sort and filter option.
    In a real application I may have left tis logic in the component directy, depending on how often these filters should be used. Here it is more an example of a non-trivial getter
    */
    filteredFeed(state){
      return infos => {
        let tmp = JSON.parse(JSON.stringify(state.feed));
        // dealing with the filter first. This is a very naive implementation. Depending on the situation, we would need to use fuzy searches, back end calls, indexed in-memory databases...
        if (infos.filter) {
          tmp = tmp.filter(curr=>{
            return curr.caption&&curr.caption.includes(infos.filter)
          });
        }
        // then sorting the result
        if (infos.sort) {
          tmp.sort((curr1, curr2)=>{
            if (curr1.stats && curr2.stats) {
              return curr2.stats[infos.sort]-curr1.stats[infos.sort]
            }
            else {
              return curr1;
            }
          });
        }

        return tmp;
      };
    }
  },
  mutations: {
    // This is a generic setter. I usually use one per store module, soI don't have to wonder how to update my state. If a setter require a lot of complexity, then I will create another one.
    set(state, infos){
      try {
        // if we have collected some posts, they are added to the list displayed to the user
        // This is
        if (infos.hasOwnProperty('feed')) {
          state.feed = state.feed.concat(infos.feed);
        }
        if (infos.hasOwnProperty('nextLink')) {
          state.nextLink = infos.nextLink;
        }

      } catch (e) {
        throw e;
      }
    }
  },
  actions: {
    // Asynchronous call to the Figure 1 API.
    async loadFeed(context){
      try {
        // retrieving the data from Figure 1 API
        const response = await axios.get(context.state.nextLink||window.FIG1_URL);
        // console.log(JSON.stringify(response.statusText, null, 2));
        if (response.status !== 200) {
          throw `Network Error: ${response.statusText}`
        }
        const fig1Data = response.data;

        // according to the instructions, all kind of item in the feed have to be treated the same way, so we just have to store all of it.
        context.commit('set', { feed:fig1Data.feed });

        // if no data has been retrieved, the next link will be the same than the current one
        if (fig1Data.feed.length > 0) {
          // otherwise, we store the link to the next batch of images. When the user want to load more images, it is easy to know where to find them
          context.commit('set', { nextLink:fig1Data._links.next.url });
        }

      } catch (e) {
        throw e;
      }
    }
  }
})

let chai = require('chai'),
expect = chai.expect,
chaiHttp = require('chai-http');
chai.use(chaiHttp);

try {

  let requester = chai.request('https://staging-app.figure1.com').keepOpen();

  describe('mock feed structure', async ()=> {

    it('should have only "post" and "comment" type', async ()=> {
      try {
        let res = await requester.get('/mock/feed');
        let data = JSON.parse(res.text);
        let testResult = data.feed.reduce((acc, curr)=>{
          return acc&&['post', 'comment'].includes(curr.type);
        }, true);
        expect(testResult).to.be.true;

      } catch (e) {
        throw e;
      }
    });

    it('all should have an id', async ()=> {
      try {
        let res = await requester.get('/mock/feed');
        let data = JSON.parse(res.text);
        let testResult = data.feed.reduce((acc, curr)=>{
          if (curr.id) {
            return acc&&true;
          }
          else {
            return acc&&false;
          }
        }, true);
        expect(testResult).to.be.true;

      } catch (e) {
        throw e;
      }
    });

  });


} catch (e) {
  console.error(JSON.stringify(e));
}

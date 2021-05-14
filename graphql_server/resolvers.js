const db = require('./db');
const Query =
{
  searchTerm: (root, args, context, info) => {
    const filterFn = (item => (item.name).includes(args.term));
    return db.test.list().filter(filterFn);
  },
  searchCat: (root, args, context, info) => {
    const filterFn = (item => (item.category) === args.cat);
    return db.test.list().filter(filterFn);
  },
  allResults: () => db.test.list()
}
module.exports = { Query }

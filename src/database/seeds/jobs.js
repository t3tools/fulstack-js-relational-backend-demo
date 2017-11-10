const dataRows = [
  {
    title: 'Database Administrator - MySQL',
    description: 'Key players will take ownership of their bandwidths by conservatively right-sizing best-of-breed standpoints.',
    location: 'Ciudad de Mexico',
    salary: 27000,
    fullTime: true
  },
  {
    title: 'UX Architect',
    description: 'Our paradigm shift development lifecycle enables knowledge transfer, innovative drivers. Going forward, our unparalleled market focus will deliver value to vertical.',
    location: 'Monterrey',
    salary: 35000,
    fullTime: true
  },
  {
    title: 'Junior Front End Engineer',
    description: 'Actionable propositions are becoming competitive organic growth experts.',
    location: 'Monterrey',
    salary: 9000,
    fullTime: false
  },
  {
    title: 'Mid-Level Front End Engineer',
    description: 'Intelligently engineer your emerging markets to increase your organic growth velocity.',
    location: 'Ciudad de Mexico',
    salary: 23000,
    fullTime: true
  }
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('job')
        .insert(dataRows);
    });
};

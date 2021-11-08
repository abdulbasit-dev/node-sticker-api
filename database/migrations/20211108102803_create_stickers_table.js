
exports.up = function(knex) {
  return knex.schema.createTable('stickers',function(table){
    table.increments('id');
    table.string('title');
    table.text('description');
    table.float('rating');
    table.string('url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stickers');
};

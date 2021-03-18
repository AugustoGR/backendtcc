    
exports.up = function(knex) {
  return knex.schema.createTable('substituicoes', function (table){
      table.increments('id');
      table.string('nome');
      table.date('data');
      table.string('horario');
      table.string('horariofim');
      table.string('status');
      table.string('email');
      table.string('profsub');
      table.string('mat');
      table.string('matsub');
      table.string('turma');
      table.string('obs');
      table.string('emailsub');
      table.integer('confirmacao');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('substituicoes');
};

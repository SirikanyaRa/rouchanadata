exports.up = function(knex) {
    return knex.schema.createTable('data', table => {
         table.string('id')
         table.string('nameR')
         table.string('nameT')
         table.string('nameE')
         table.string('cateT')
         table.string('cateE')
         table.string('phone')
         table.string('phonef')
         table.string('lng')
         table.string('lat')
         table.string('hours')
         table.string('urlW')
         table.string('urlF')
         table.string('add1')
         table.string('add1E')
         table.string('postcode')
         table.string('admin2')
         table.string('admin2E')
         table.string('admin3')
         table.string('admin3E')        
         table.string('admin4')
         table.string('admin4E')
         table.string('addStt')
         table.string('addSte')
         table.string('hnumber')
       });
 };
 
 exports.down = function(knex) {
     return knex.schema.dropTableifExits('data');
 };
 

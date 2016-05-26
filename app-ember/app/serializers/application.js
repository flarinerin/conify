import DS from 'ember-data';
 
export default DS.ActiveModelSerializer.extend({
  attrs: {
    createdAt: { serialize: false },
    updatedAt: { serialize: false },
  },
});

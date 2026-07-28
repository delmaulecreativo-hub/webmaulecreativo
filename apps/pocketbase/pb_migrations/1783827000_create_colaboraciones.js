/// <reference path="../database-types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      type: 'base',
      name: 'colaboraciones',
      listRule: null,
      viewRule: null,
      createRule: '', // anyone can submit
      updateRule: null,
      deleteRule: null,
      fields: [
        { type: 'text', name: 'nombre', required: true, max: 120 },
        { type: 'email', name: 'email', required: true },
        { type: 'text', name: 'organizacion', required: false, max: 160 },
        {
          type: 'select',
          name: 'tipo',
          required: true,
          maxSelect: 1,
          values: ['Museo', 'Universidad', 'Empresa', 'Territorio', 'Otro'],
        },
        { type: 'text', name: 'mensaje', required: true, max: 2000 },
        { type: 'autodate', name: 'created', onCreate: true, onUpdate: false },
      ],
    });
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('colaboraciones');
    app.delete(collection);
  }
);

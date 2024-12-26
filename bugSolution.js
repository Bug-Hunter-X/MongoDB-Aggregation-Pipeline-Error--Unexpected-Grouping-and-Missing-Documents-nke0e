```javascript
//Corrected aggregation pipeline
aggregate([
  {$match: { /* some filter */ }},
  {$lookup: {
    from: 'collection2',
    localField: 'foreignKey',
    foreignField: '_id',
    as: 'relatedDocuments'
  }},
  {$unwind: '$relatedDocuments'},
  {$group: {
    _id: '$_id', // Correct grouping by the main document's ID
    relatedDocuments: {$push: '$relatedDocuments'}
  }}
]);
```
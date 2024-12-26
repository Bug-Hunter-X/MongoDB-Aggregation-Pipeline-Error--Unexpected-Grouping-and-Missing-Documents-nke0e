```javascript
//Incorrect aggregation pipeline causing unexpected results
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
    _id: '$foreignKey',
    data: {$push: '$relatedDocuments'}
  }}
]);
```
module.exports = {
  name: 'cms',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cms',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

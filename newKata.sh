#!/bin/bash
[[ -z "$1" ]] && { echo 'No package name is given.'; exit 1; }

packagename="$1"
now="$(date +'%Y-%m-%d')"
lerna create --yes "$now-$packagename"
cat packages/"$now-$packagename"/package.json | jq '.scripts.test = $v' --arg v 'jest --coverage' | sponge packages/"$now-$packagename"/package.json
cat > packages/"$now-$packagename"/lib/"$now-$packagename".js <<EOL
const ${packagename} = ()=>{

};

module.exports = { ${packagename} };
EOL

cat > packages/"$now-$packagename"/__tests__/"$now-$packagename".test.js <<EOL
const { expect } = require('chai');
const { ${packagename} } = require('../lib/${now}-${packagename}.js');

describe('Testing ${now}-${packagename}', () => {
  describe('User story 1', ()=>{
    it('needs tests', ()=>{
      expect(${packagename}()).equal(true);
    });
  });

  describe('User story 2', ()=>{

  })
});
EOL

cat > packages/"$now-$packagename"/README.md <<EOL
# ${now}-${packagename}

> TODO: description

## User story 1

> Description

- User test 1/1:
- User test 1/2:

## User story 2

> Description

- User test 2/1:
- User test 2/2:
EOL

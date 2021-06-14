#!/bin/bash
[[ -z "$1" ]] && { echo 'No package name is given.'; exit 1; }
if [ -z "$2" ]; then
  now="$(date +'%Y-%m-%d')"
else
  now=$2
fi
packagename="$1"
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

describe('Testing ${now}-${packagename}...', () => {
  describe('User story 1', ()=>{
    it('', ()=>{
      expect(${packagename}()).equal(true);
    });
    it.skip('', ()=>{

    });
  });

  describe('User story 2', ()=>{
    it.skip('', ()=>{

    });
    it.skip('', ()=>{

    });
  })
});
EOL

cat > packages/"$now-$packagename"/README.md <<EOL
# ${now}-${packagename}

> TODO: description

## User story 1

> As a user, I have to know if the input is valid

- User test 1/1: It should be false if
- User test 1/2: It should be false if

## User story 2

> As a user, I have to know if returning the correct value

- User test 2/1: It should be false if
- User test 2/2: It should be false if
EOL

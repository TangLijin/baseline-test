'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionB = [];
  for(var i in objectB){
        collectionB.push(objectB.i);
  }

  var sameElements = [];
  var k = 0;
      for(var i = 0; i < collectionA.length-1; i++){
        for(var j = 0; j < collectionB.length-1; j++){
            if(collectionA[i] == collectionB[j]){
                sameElements[k] = collectionA[i];
                //sameElements.push(collectionA[i]);
                k++;
            }
        }
      }
  return sameElements;
  //return '实现练习要求，并改写该行代码。';
}

'use strict';

function collectSameElements(collectionA, collectionB) {
    var sameElements = [];
    var k = 0;
    for(var i = 0; i < collectionA.length-1; i++){
      for(var j = 0; j < collectionB.length-1; j++){
          if(collectionA[i] === collectionB[j]){
              sameElements[k] = collectionA[i];
              //sameElements.push(collectionA[i]);
              k++;
          }
      }
    }
    return sameElements;
}
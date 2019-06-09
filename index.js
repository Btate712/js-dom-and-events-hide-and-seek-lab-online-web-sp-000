function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return innerDiv(document.querySelector('#grand-node'));
}

function innerDiv(node) {
  if (node.querySelector('div') == null) {
    return node;
  } else {
    return innerDiv(node.querySelector('div'));
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    let listItems = rankedLists[i].querySelectorAll('li');
    for (let j = 0; j < listItems.length; j++) {
      listItems[j].innerHTML = parseInt(listItems[j].innerHTML) + n;
    }
  }
}

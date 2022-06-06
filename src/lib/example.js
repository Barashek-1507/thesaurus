/*
var ThesTree = function(d3, elem, config) {
  config = config || {}
  var concepts = config.concepts;
  var editNode = function (nodeId) {
    d3.editNode(nodeId);
  };
  var setConcepts = function (newConcepts) {
    concepts = newConcepts;
    render();
  }
  var moveNode = function (nodeId, callback) {
    var childConcepts = callback(nodeId)
  }

  var $container = $(elem);

  var $container.on("click", ".node", function (e) {
    // 1 вариант с колбэком
    moveNode(e.target.id, config.moveNodeCallback);
    // 2 вариант с событием
    var event1 = new CustomEvent({
      nodeId: e.target.id
    })
    $container.dispatchEvent(event1);
  })

  var render() {
    d3.renderTree($container, concepts);
  }

  render();
  return {
    setConcepts: setConcepts,
    editNode: editNode
  };
};

// код пользователя
var thesTree1 = ThesTree(D3, "#tree1", {
  concepts: conceptList,
  // 1 вариант с колбэком
  moveNodeCallback: function(nodeId) {
    $.fetch(...).then(response){
      return response.data
    }
  }
});

// 2 вариант с событием
$container.on("TT.nodeMoved", function (e) {
  $.fetch(...).then(response){
    thesTree1.setConcepts(response.data)
  }
});

var thesTree2 = GeoLingva(D3, "#tree2");

thesTree1.editNode(10);
thesTree2.setConcepts([concept1, concept2]);
*/


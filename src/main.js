/*global Vue */
(function() {
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

  new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });

  new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });

  const app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn Vue'},
        {text: 'Build something awesome'}
      ]
    }
  });
  app4.todos.push({text: 'New item'});
})();

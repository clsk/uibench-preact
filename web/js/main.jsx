import { h, render } from 'preact';
import { Main } from './ui/main';

uibench.init('Preact', '3.2.0');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');

  uibench.run(
      function(state) {
        render(<Main data={state}/>, container, container.firstChild);
      },
      function(samples) {
        render(<pre>{JSON.stringify(samples, null, ' ')}</pre>, container, container.firstChild);
      }
  );
});

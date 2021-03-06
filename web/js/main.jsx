import { h, render } from 'preact';
import { Main } from './ui/main';

uibench.init('Preact', '8.2.4');

document.addEventListener('DOMContentLoaded', (e) => {
  var container = document.querySelector('#App'),
    root;

  uibench.run(
      (state) => {
        root = render(<Main data={state}/>, container, root);
      },
      (samples) => {
        root = render(<pre>{JSON.stringify(samples, null, ' ')}</pre>, container, root);
      }
  );
});

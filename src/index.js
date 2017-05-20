import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes() } from './routes';

ReactDOM.render(
	routes, 
	document.getElementById('root')
);
registerServiceWorker();

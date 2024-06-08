import { App } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Toolbar from 'primevue/toolbar';

const components = {
  Button,
  Calendar,
	Card,
	Checkbox,
	Column,
  DataTable,
	Dialog,
  Dropdown,
	FileUpload,
	InputText,
	InputNumber,
	RadioButton,
	Textarea,
	Toolbar,
};

const registerPrimeVueComponents = (app: App) => {
  Object.keys(components).forEach(key => {
    const component = (components as any)[key];
    if (component && component.name) {
      app.component('Prime' + component.name, component);
    }
  });
};

export default {
  install: (app: App) => {
    registerPrimeVueComponents(app);
  }
};

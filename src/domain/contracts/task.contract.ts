import { Description } from '../value-objects/description.value-object';
import { Title } from '../value-objects/title.value-object';

export interface TaskContract {
  title: Title;
  description: Description;
}

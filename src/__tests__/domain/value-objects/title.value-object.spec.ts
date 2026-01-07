import { TitleError } from '@src/domain/errors/value-objects/title.errors';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Title - Value Object', () => {
  it('should be able to create a title', () => {
    const title_value = 'Exemplo - título';

    const title = Title.create(title_value);

    expect(title).toBeDefined();
    expect(title.value).toBe(title_value);
  });

  it('should not allow titles to exceed 30 characters', () => {
    const invalid_value = 'a'.repeat(31);

    const fn = () => Title.create(invalid_value);

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(TitleError);
      expect((error as TitleError).name).toBe('TitleError');
      expect((error as TitleError).code).toBe('MAX_LENGTH_ERROR');
    }
  });

  it('should ensure that title is not empty', () => {
    const invalid_value = '';
    const fn = () => Title.create(invalid_value);

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(TitleError);
      expect((error as TitleError).name).toBe('TitleError');
      expect((error as TitleError).code).toBe('NOT_EMPTY_ERROR');
    }
  });
});

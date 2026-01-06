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

    expect(() => Title.create(invalid_value)).toThrow(
      'The title must not exceed 30 characters.',
    );
  });
});

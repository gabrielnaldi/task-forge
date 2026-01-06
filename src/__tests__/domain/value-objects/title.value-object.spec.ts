import { Title } from '@src/domain/value-objects/title.value-object';

describe('Title - Value Object', () => {
  it('should be able to create a title', () => {
    const title_value = 'Exemplo - título';

    const title = Title.create(title_value);

    expect(title).toBeDefined();
    expect(title.value).toBe(title_value);
  });
});

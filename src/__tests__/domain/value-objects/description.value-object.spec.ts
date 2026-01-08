import { Description } from '@src/domain/value-objects/description.value-object';

describe('Description - Value Object', () => {
  const VALID_DESCRIPTION = 'Description - example';

  it('should create a valid description', () => {
    const description = Description.create(VALID_DESCRIPTION);

    expect(description).toBeInstanceOf(Description);
    expect(description.value).toBe(VALID_DESCRIPTION);
  });
});

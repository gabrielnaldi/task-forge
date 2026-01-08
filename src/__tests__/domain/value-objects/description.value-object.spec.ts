import { DescriptionError } from '@src/domain/errors/value-objects/description.errors';
import { Description } from '@src/domain/value-objects/description.value-object';

describe('Description - Value Object', () => {
  const VALID_DESCRIPTION = 'Description - example';

  it('should create a valid description', () => {
    const description = Description.create(VALID_DESCRIPTION);

    expect(description).toBeInstanceOf(Description);
    expect(description.value).toBe(VALID_DESCRIPTION);
  });

  it('must make sure that description does not exceed 100 characters', () => {
    const invalid_description = 'a'.repeat(101);

    const fn = () => Description.create(invalid_description);

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(DescriptionError);
      expect((error as DescriptionError).code).toBe('MAX_LENGTH_ERROR');
    }
  });

  it('must make sure that description does not exceed 100 characters', () => {
    const invalid_description = '';

    const fn = () => Description.create(invalid_description);

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(DescriptionError);
      expect((error as DescriptionError).code).toBe('NOT_EMPTY_ERROR');
    }
  });
});

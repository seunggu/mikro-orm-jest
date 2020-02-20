import { animals, colors, names, uniqueNamesGenerator } from 'unique-names-generator';

export class TextUtil {
  public static generateUniqueNames(): string {
    return uniqueNamesGenerator({
      separator: '-',
      length: 3,
      style: 'lowerCase',
      dictionaries: [colors, animals, names],
    });
  }
}

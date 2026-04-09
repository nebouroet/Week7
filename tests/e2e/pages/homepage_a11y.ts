import { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const WCAG_TAGS = [
    'wcag2a', 
    'wcag2aa',
     'wcag21a',
      'wcag21aa',
       'contrast',
        'focus-visible',
         'heading-order'] as const;

export class Utopia8Page {
    readonly page: Page;
    readonly url = 'https://utopia8.ua/en/';

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

    async runAccessibilityScan() {
        return new AxeBuilder({ page: this.page })
            .withTags([...WCAG_TAGS])
            .analyze();
    }
}
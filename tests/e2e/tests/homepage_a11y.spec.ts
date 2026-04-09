

// remade test using POM

import { expect, test } from '@playwright/test';
import { Utopia8Page } from '../pages/homepage_a11y';

test.describe('Accessibility Scan Utopia8', () => {

    test('should have no accessibility violations', async ({ page }) => {
        const utopia8Page = new Utopia8Page(page);

        await utopia8Page.goto();

        const scanResults = await utopia8Page.runAccessibilityScan();

        if (scanResults.violations.length > 0) {
            console.log(JSON.stringify(scanResults.violations, null, 2));
        }

        expect(scanResults.violations).toEqual([]);
    });

});

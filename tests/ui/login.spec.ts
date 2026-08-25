import { test, expect } from '@playwright/test';
import { env } from '../../src/config/env.config';
import { LoginPage } from '../../src/pages/login.page';

test.describe('Login feature', () => {
  test(
    'should allow a valid user to log in',
    { tag: ['@ui', '@login'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate();
      await loginPage.login(env.username, env.password);

      await expect(page).toHaveURL(/inventory\.html/);
      await expect(
        page.getByText('Products', { exact: true }),
      ).toBeVisible();
    },
  );
});
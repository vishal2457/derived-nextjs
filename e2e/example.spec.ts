import { test, expect } from '@playwright/test';

test('redirect to dashboard on localhost:3001', async ({ page }) => {
  // Navigate to the local app
  await page.goto('http://localhost:3001');

  // Wait for navigation to complete and check if redirected to dashboard
  // await page.waitForURL('**/dashboard', { timeout: 10000 });
  
  // Verify we're on the dashboard page
  await expect(page).toHaveURL(/dashboard/);
});

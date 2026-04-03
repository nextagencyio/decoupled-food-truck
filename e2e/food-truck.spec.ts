import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Rolling Flame/)
    await expect(page.getByRole('heading', { name: /Street Tacos.*Real Flavor/ })).toBeVisible()
  })

  test('shows stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('100K+').first()).toBeVisible()
    await expect(page.getByText('Tacos Served').first()).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/menu"]').first()).toBeVisible()
    await expect(page.locator('a[href="/schedule"]').first()).toBeVisible()
  })
})

test.describe('Menu page', () => {
  test('loads and shows menu items', async ({ page }) => {
    await page.goto('/menu')
    await expect(page.getByRole('heading', { name: 'Our Menu' })).toBeVisible()
    await expect(page.getByText('Slow-Roasted Carnitas Taco').first()).toBeVisible()
    await expect(page.getByText('Al Pastor Taco').first()).toBeVisible()
    await expect(page.getByText('Baja Fish Taco').first()).toBeVisible()
  })

  test('menu item detail page loads', async ({ page }) => {
    await page.goto('/menu/carnitas-taco')
    await expect(page.getByRole('heading', { name: 'Slow-Roasted Carnitas Taco' })).toBeVisible()
    await expect(page.getByText('$4.50').first()).toBeVisible()
  })
})

test.describe('Schedule page', () => {
  test('loads and shows location schedules', async ({ page }) => {
    await page.goto('/schedule')
    await expect(page.getByRole('heading', { name: 'Find Our Truck' })).toBeVisible()
    await expect(page.getByText('Monday: Tech Park').first()).toBeVisible()
  })

  test('schedule detail page loads', async ({ page }) => {
    await page.goto('/schedule/monday-tech-park')
    await expect(page.getByRole('heading', { name: /Monday/ })).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /Fuego Street Kitchen/ })).toBeVisible()
  })

  test('catering page loads', async ({ page }) => {
    await page.goto('/catering')
    await expect(page.getByRole('heading', { name: /Catering/ }).first()).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
  })
})

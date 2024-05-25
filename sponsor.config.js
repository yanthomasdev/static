import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'yanthomasdev',
    type: 'user',
  },

  // Rendering configs
  width: 800,
  renderer: 'tiers',
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Buddy',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Super Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
        title: 'Legendary Sponsors',
        monthlyDollars: 500,
        preset: tierPresets.large,
    },
    {
      title: 'Ultra Sponsors',
      monthlyDollars: 1000,
      preset: tierPresets.xl,
    },
  ],
})
import { create } from 'zustand';
import { Appearance } from 'react-native';

const THEMES = ['light', 'dark'] as const;

export type Theme = (typeof THEMES)[number];
export type ConfigurableTheme = Theme | 'system';

export interface ThemeStore {
  preferredTheme: ConfigurableTheme;
  setPreferredTheme: (theme: ConfigurableTheme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  preferredTheme: 'system',
  setPreferredTheme: (theme) => set({ preferredTheme: theme }),
}));

export const useTheme = () => {
  return useThemeStore((store) =>
    store.preferredTheme === 'system'
      ? Appearance.getColorScheme() as Theme
      : store.preferredTheme
  );
};

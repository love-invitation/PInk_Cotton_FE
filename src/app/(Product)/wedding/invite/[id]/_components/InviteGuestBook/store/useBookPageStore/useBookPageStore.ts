import { create } from 'zustand';

export interface UseBookPageStore {
  page: number;

  increasePage: () => void;
  decreasePage: () => void;
  resetPage: () => void;
}

const useBookPageStore = create<UseBookPageStore>((set) => ({
  page: 0,

  increasePage: () => set(({ page }) => ({ page: page + 1 })),
  decreasePage: () => set(({ page }) => ({ page: page - 1 })),
  resetPage: () => set(() => ({ page: 0 })),
}));

export default useBookPageStore;

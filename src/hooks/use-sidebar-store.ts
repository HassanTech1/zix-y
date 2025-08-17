import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { useIsMobile } from "./use-mobile"

interface SidebarState {
  open: boolean
  openMobile: boolean
  setOpen: (open: boolean) => void
  setOpenMobile: (open: boolean) => void
  toggleSidebar: () => void
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set, get) => ({
      open: true,
      openMobile: false,
      setOpen: (open) => set({ open }),
      setOpenMobile: (openMobile) => set({ openMobile }),
      toggleSidebar: () => {
        const isMobile = window.innerWidth < 768 // Simple check
        if (isMobile) {
          set((state) => ({ openMobile: !state.openMobile }))
        } else {
          set((state) => ({ open: !state.open }))
        }
      },
    }),
    {
      name: "sidebar-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: () => (state) => {
        if (state) {
            // This is a bit of a hack to ensure we don't have a hydration mismatch
            // We set the initial state from storage only on the client
            if (typeof window !== 'undefined') {
                state.open = state.open ?? true;
            }
        }
      }
    }
  )
)
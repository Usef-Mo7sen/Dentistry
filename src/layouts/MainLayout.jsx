import { Menu, Moon, Sparkles, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  {
    label: 'التركيبات الرقمية',
    englishLabel: 'Digital Dentistry',
    path: '/digital-dentistry/zirconia-bridge-design-setup',
  },
  { label: 'علاج الجذور', englishLabel: 'Endodontics', path: '/endodontics' },
  { label: 'الجراحة', englishLabel: 'Surgery', path: '/surgery' },
]

function MainLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-300 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setIsSidebarOpen((open) => !open)}
          >
            <Menu size={18} />
            التخصصات
          </button>
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Sparkles size={16} />
            <span>مرجع طب الأسنان الرقمي</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            onClick={() => setIsDarkMode((current) => !current)}
            aria-label="تبديل الوضع الداكن"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            {isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
          </button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 p-4 md:flex-row">
        <aside
          className={`rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block md:w-72 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <h2 className="mb-3 text-lg font-semibold">التخصصات</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <p className="font-medium">{item.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.englishLabel}</p>
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="min-h-[70vh] flex-1 rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout

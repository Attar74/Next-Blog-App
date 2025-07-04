import SideNav from '@/app/ui/components/sidenav';
import Header from '../ui/components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-gray-900 bg-white">
      <div className="flex flex-col absolute top-0 left-0 right-0">
        <Header />
      </div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden pt-16">
        <div className="w-full flex-none md:w-64 border-r border-gray-200 dark:border-gray-700">
          <SideNav />
        </div>
        <div className="flex-grow md:overflow-y-auto p-2 md:px-12 md:py-6 bg-white dark:bg-gray-800">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
